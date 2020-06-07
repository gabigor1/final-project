from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Film
from .serializers import FilmSerializer, PopulatedFilmSerializer

class FilmListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        films = Film.objects.all()
        serialized_films = PopulatedFilmSerializer(films, many=True)
        return Response(serialized_films.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        new_film = FilmSerializer(data=request.data)
        if new_film.is_valid():
            new_film.save()
            return Response(new_film.data, status=status.HTTP_201_CREATED)
        return Response(new_film.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class FilmDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_film(self, pk):
        try:
            return Film.objects.get(pk=pk)
        except Film.DoesNotExist:
            raise NotFound()

    def is_film_owner(self, film, user):
        if film.owner.id != user.id:
            raise PermissionDenied()

    def get(self, _request, pk):
        film = self.get_film(pk)
        serialized_film = PopulatedFilmSerializer(film)
        return Response(serialized_film.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        film_to_update = self.get_film(pk)
        self.is_film_owner(film_to_update, request.user)
        request.data['owner'] = request.user.id
        updated_film = FilmSerializer(film_to_update, data=request.data)
        if updated_film.is_valid():
            updated_film.save()
            return Response(updated_film.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_film.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        film_to_delete = self.get_film(pk)
        self.is_film_owner(film_to_delete, request.user)
        film_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
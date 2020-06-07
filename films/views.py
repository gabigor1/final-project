from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Film
from .serializers import FilmSerializer, PopulatedFilmSerializer

class FilmListView(APIView):

    def get(self, _request):
        films = Film.objects.all()
        serialized_films = PopulatedFilmSerializer(films, many=True)
        return Response(serialized_films.data, status=status.HTTP_200_OK)

class FilmDetailView(APIView):

    def get_film(self, pk):
        try:
            return Film.objects.get(pk=pk)
        except Film.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        film = self.get_film(pk)
        serialized_film = PopulatedFilmSerializer(film)
        return Response(serialized_film.data, status=status.HTTP_200_OK)
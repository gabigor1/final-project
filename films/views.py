from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Film
from .serializers import FilmSerializer

class FilmListView(APIView):

    def get(self, _request):
        films = Film.objects.all()
        serialized_films = FilmSerializer(films, many=True)
        return Response(serialized_films.data, status=status.HTTP_200_OK)

class FilmDetailView(APIView):

    def get_film(self, pk):
        try:
            return Film.objects.get(pk=pk)
        except Film.DoesNotExist:
            raise NotFound()

    def get(self, request):
      film = self.get_film(pk)
      serialized_film = FilmSerializer(film)
      return Response(serialized_film.data)


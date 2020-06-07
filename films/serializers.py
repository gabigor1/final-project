from rest_framework import serializers
from django.contrib.auth import get_user_model

from genres.serializers import GenreSerializer
from reviews.serializers import PopulatedReviewSerializer
from .models import Film
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')

class FilmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Film
        fields = '__all__'

class PopulatedFilmSerializer(FilmSerializer):
    owner = UserSerializer()
    genres = GenreSerializer(many=True)
    reviews = PopulatedReviewSerializer(many=True)
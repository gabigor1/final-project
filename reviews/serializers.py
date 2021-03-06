from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Review
User = get_user_model()

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')


class PopulatedReviewSerializer(ReviewSerializer):
    owner = UserSerializer()
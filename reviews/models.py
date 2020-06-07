from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth import get_user_model

User = get_user_model()

class Review(models.Model):
    text = models.CharField(max_length=300)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    owner = models.ForeignKey('jwt_auth.User', related_name='reviews', on_delete=models.CASCADE)
    film = models.ForeignKey('films.Film', related_name='reviews', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Review {self.id} - Film {self.film}'
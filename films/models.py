from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Film(models.Model):
    title = models.CharField(max_length=40, unique=True)
    duration = models.FloatField()
    year = models.IntegerField()
    image = models.CharField(max_length=300)
    director = models.CharField(max_length=50)
    genres = models.ManyToManyField(
        'genres.Genre',
        related_name='films'
    )
    owner = models.ForeignKey(
        User,
        related_name='films',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.title} - {self.director}'
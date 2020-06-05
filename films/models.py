from django.db import models

class Film(models.Model):

    title = models.CharField(max_length=40, unique=True)
    duration = models.FloatField()
    year = models.IntegerField()
    director = models.CharField(max_length=50)


    def __str__(self):
        return f'{self.title} - {self.director}'
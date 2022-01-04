from django.db import models
from musclegroup.models import MuscleGroup


class Exercise(models.Model):
    name = models.TextField(max_length=100, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)
    photo_link = models.TextField(max_length=500, blank=False, null=True)
    musclegroups = models.ManyToManyField(MuscleGroup)

    def __str__(self) -> str:
        return self.name
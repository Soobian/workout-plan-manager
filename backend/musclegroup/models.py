from django.db import models


class MuscleGroup(models.Model):
    name = models.TextField(max_length=100, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)
    photo_link = models.TextField(max_length=500, blank=False, null=True)

    def __str__(self) -> str:
        return self.name
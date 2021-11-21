from django.db import models


class MuscleGroup(models.Model):
    name = models.TextField(max_length=30, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)
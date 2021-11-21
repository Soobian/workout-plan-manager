from django.db import models


class Exercise(models.Model):
    name = models.TextField(max_length=30, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)
    photo_link = models.TextField(max_length=500, blank=False, null=True)
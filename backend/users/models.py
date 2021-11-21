from django.db import models
from django.contrib.auth.models import User


class UserParameters(models.Model):
    UserId = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    sex = models.TextField(max_length=10, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)

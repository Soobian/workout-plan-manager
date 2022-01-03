from rest_framework import serializers
from .models import Exercise


class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'description', 'photo_link', 'musclegroups']

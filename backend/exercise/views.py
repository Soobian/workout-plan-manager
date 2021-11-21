from rest_framework import viewsets
from .serializers import ExercisesSerializer
from .models import Exercise


class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExercisesSerializer

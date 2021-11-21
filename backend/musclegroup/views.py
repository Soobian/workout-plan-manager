from rest_framework import viewsets
from .serializers import MuscleGroupSerializer
from .models import MuscleGroup


class MuscleGroupViewSet(viewsets.ModelViewSet):
    queryset = MuscleGroup.objects.all()
    serializer_class = MuscleGroupSerializer

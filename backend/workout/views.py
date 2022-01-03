from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import WorkoutPlan, WorkoutPlanDay, WorkoutPlanDay_Exercise, WorkoutPlanDay_Exercise_Sets
from .serializers import WorkoutPlanSerializer, WorkoutPlanDaySerializer, WorkoutPlanDay_ExerciseSerializer, \
    WorkoutPlanDay_Exercise_SetsSerializer


class WorkoutPlanViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer


class WorkoutPlanDayViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDay.objects.all()
    serializer_class = WorkoutPlanDaySerializer


class WorkoutPlanDay_ExerciseViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDay_Exercise.objects.all()
    serializer_class = WorkoutPlanDay_ExerciseSerializer


class WorkoutPlanDay_Exercise_SetsViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDay_Exercise_Sets.objects.all()
    serializer_class = WorkoutPlanDay_Exercise_SetsSerializer

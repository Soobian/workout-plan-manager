from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import MuscleGroup, Exercise, WorkoutPlan, WorkoutPlanDay, WorkoutPlanDayExercise, WorkoutPlanDayExerciseSets
from .serializers import MuscleGroupSerializer, ExerciseSerializer, WorkoutPlanSerializer, WorkoutPlanDaySerializer, \
     WorkoutPlanDayExerciseSerializer, WorkoutPlanDayExerciseSetsSerializer

class MuscleGroupViewSet(viewsets.ModelViewSet):
    queryset = MuscleGroup.objects.all()
    serializer_class = MuscleGroupSerializer


class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class WorkoutPlanViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer
    permission_classes = [IsAuthenticated]  


class WorkoutPlanDayViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDay.objects.all()
    serializer_class = WorkoutPlanDaySerializer


class WorkoutPlanDayExerciseViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDayExercise.objects.all()
    serializer_class = WorkoutPlanDayExerciseSerializer


class WorkoutPlanDayExerciseSetsViewSet(viewsets.ModelViewSet):
    queryset = WorkoutPlanDayExerciseSets.objects.all()
    serializer_class = WorkoutPlanDayExerciseSetsSerializer

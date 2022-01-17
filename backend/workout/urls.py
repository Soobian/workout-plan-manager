"""
Plik zawiera adresy url dla odpowiednich widoków

@author Aneta Postrożny

"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import MuscleGroupViewSet, ExerciseViewSet, WorkoutPlanViewSet, WorkoutPlanDayViewSet, \
    WorkoutPlanDayExerciseViewSet, WorkoutPlanDayExerciseSetsViewSet


router = routers.DefaultRouter()
router.register('musclegroup', MuscleGroupViewSet)
router.register('exercise', ExerciseViewSet)
router.register('workoutplan', WorkoutPlanViewSet)
router.register('workoutplanday', WorkoutPlanDayViewSet)
router.register('set', WorkoutPlanDayExerciseViewSet)
router.register('reps', WorkoutPlanDayExerciseSetsViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
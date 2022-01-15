from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import WorkoutPlanViewSet, WorkoutPlanDayViewSet, WorkoutPlanDay_ExerciseViewSet,\
    WorkoutPlanDay_Exercise_SetsViewSet

app_name = 'workout'

router = routers.DefaultRouter()
router.register('workout', WorkoutPlanViewSet, basename='workout')
router.register('workoutplan', WorkoutPlanDayViewSet, basename='workoutplan')
router.register('set', WorkoutPlanDay_ExerciseViewSet, basename='set')
router.register('reps', WorkoutPlanDay_Exercise_SetsViewSet, basename='reps')


urlpatterns = [
    path('', include(router.urls)),
]
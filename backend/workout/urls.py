from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import WorkoutPlanViewSet, WorkoutPlanDayViewSet, WorkoutPlanDay_ExerciseViewSet,\
    WorkoutPlanDay_Exercise_SetsViewSet

router = routers.DefaultRouter()
router.register('workout', WorkoutPlanViewSet)
router.register('workoutplan', WorkoutPlanDayViewSet)
router.register('set', WorkoutPlanDay_ExerciseViewSet)
router.register('reps', WorkoutPlanDay_Exercise_SetsViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
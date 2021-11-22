from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import WorkoutPlanViewSet, WorkoutPlanDayViewSet, WorkoutPlanDay_ExerciseViewSet,\
    WorkoutPlanDay_Exercise_SetsViewSet

router = routers.DefaultRouter()
router.register('workout', WorkoutPlanViewSet)
router.register('workoutplan', WorkoutPlanViewSet)
router.register('set', WorkoutPlanViewSet)
router.register('reps', WorkoutPlanViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
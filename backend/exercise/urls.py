from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import ExerciseViewSet

router = routers.DefaultRouter()
router.register('exercise', ExerciseViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
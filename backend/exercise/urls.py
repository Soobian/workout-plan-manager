from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import ExerciseViewSet

app_name = 'exercise'

router = routers.DefaultRouter()
router.register('exercise', ExerciseViewSet, basename='exercise')


urlpatterns = [
    path('', include(router.urls)),
]
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import MeasurementViewSet

router = routers.DefaultRouter()
router.register('measurements', MeasurementViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
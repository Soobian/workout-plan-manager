from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, UserParametersViewSet
from .models import UserParameters


router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('parameters', UserParametersViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import MuscleGroupViewSet

router = routers.DefaultRouter()
router.register('musclegroup', MuscleGroupViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
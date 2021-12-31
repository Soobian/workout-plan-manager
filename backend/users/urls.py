from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, UserParametersViewSet
from .models import UserParameters

app_name = 'users'

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('parameters', UserParametersViewSet)

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]
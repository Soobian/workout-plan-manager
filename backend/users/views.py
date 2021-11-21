from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import UserSerializer
from  .serializers import UserParametersSerializer
from  .models import UserParameters


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserParametersViewSet(viewsets.ModelViewSet):
    queryset = UserParameters.objects.all()
    serializer_class = UserParametersSerializer


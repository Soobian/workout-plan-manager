from rest_framework import viewsets
from .models import Measurement
from .serializers import MeasurementSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class MeasurementViewSet(viewsets.ModelViewSet):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer
    #permission_classes = [IsAuthenticated]  
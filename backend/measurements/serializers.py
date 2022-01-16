"""
Plik zawiera serializatory modeli bazy danych

- MeasurementSerializer   Serializator dla parametrów użytkownika

@author Maciej Ciepał

"""
from rest_framework import serializers
from .models import Measurement



class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measurement
        fields = ('userId', 'date', 'chestSize', 'waistSize', 'bicepsSize', 'thighSize')
        
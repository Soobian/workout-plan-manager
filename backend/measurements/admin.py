"""
Plik zawiera zarejestrowane modele bazy

@author Maciej Ciepał
"""
from django.contrib import admin
from .models import Measurement


admin.site.register(Measurement)

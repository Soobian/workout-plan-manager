from django.contrib import admin
from .models import WorkoutPlan, WorkoutPlanDay, WorkoutPlanDay_Exercise, WorkoutPlanDay_Exercise_Sets

admin.site.register(WorkoutPlan)
admin.site.register(WorkoutPlanDay)
admin.site.register(WorkoutPlanDay_Exercise)
admin.site.register(WorkoutPlanDay_Exercise_Sets)

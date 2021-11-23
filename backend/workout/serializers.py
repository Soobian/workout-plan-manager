from rest_framework import serializers
from .models import WorkoutPlan, WorkoutPlanDay, WorkoutPlanDay_Exercise, WorkoutPlanDay_Exercise_Sets


class WorkoutPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlan
        fields = ['WorkoutPlanId','UserId', 'name', 'description']


class WorkoutPlanDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay
        fields = ['WorkoutPlanDayId','WorkoutPlanId', 'name', 'description']


class WorkoutPlanDay_ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay_Exercise
        fields = ['WorkoutPlanDay_ExerciseId', 'WorkoutPlanDayId', 'ExerciseId']


class WorkoutPlanDay_Exercise_SetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay_Exercise_Sets
        fields = ['WorkoutPlanDay_Exercise_SetsId', 'WorkoutPlanDay_ExerciseId','reps']

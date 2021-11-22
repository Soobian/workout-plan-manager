from rest_framework import serializers
from .models import WorkoutPlan, WorkoutPlanDay, WorkoutPlanDay_Exercise, WorkoutPlanDay_Exercise_Sets


class WorkoutPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlan
        fields = ['Id', 'name', 'description']


class WorkoutPlanDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay
        fields = ['Id', 'name', 'description']


class WorkoutPlanDay_ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay_Exercise
        fields = ['Id', 'WorkoutPlanDayId', 'ExerciseId']


class WorkoutPlanDay_Exercise_SetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay_Exercise_Sets
        fields = ['id', 'reps']

from rest_framework import serializers
from .models import MuscleGroup, Exercise, WorkoutPlan, WorkoutPlanDay, WorkoutPlanDayExercise, WorkoutPlanDayExerciseSets


class MuscleGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = MuscleGroup
        fields = ('name', 'description', 'photo_link')


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('name', 'description', 'photo_link', 'musclegroups')


class WorkoutPlanDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDay
        fields = ('workoutPlanId', 'name', 'description')


class WorkoutPlanSerializer(serializers.ModelSerializer): 
    workoutplanday = WorkoutPlanDaySerializer(many=True, read_only=True)
    class Meta:
        model = WorkoutPlan
        fields = ('userId', 'name', 'level', 'photo_link', 'description', 'workoutplanday')


class WorkoutPlanDayExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDayExercise
        fields = ('workoutPlanDayId', 'exerciseId')


class WorkoutPlanDayExerciseSetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDayExerciseSets
        fields = ('workoutPlanDayExerciseId','reps')



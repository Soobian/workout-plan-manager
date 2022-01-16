"""
Plik zawiera zbiór serializatorów modeli bazy danych

- MuscleGroupSerializer:   Serializator dla grup mięśni
- ExerciseSerializer:  Serializator ćwiczeń
- WorkoutPlanSerializer:    Serializator Planów ćwiczeń
- WorkoutPlanDaySerializer:    Serializator dniowego planu ćwiczeń
- WorkoutPlanDayExerciseSerializer:  Serializator ćwiczeń w danym dniu
- WorkoutPlanDayExerciseSetsSerializer:   Serializator szczegółowych informacji na temat ćwiczenia

@author Aneta Postrożny, Maciej Ciepał

"""

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


class WorkoutPlanDayExerciseSetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlanDayExerciseSets
        fields = ('reps', 'series')


class WorkoutPlanDayExerciseSerializer(serializers.ModelSerializer):
    workoutplanexercisessets = WorkoutPlanDayExerciseSetsSerializer(many=True, read_only=True)
    class Meta:
        model = WorkoutPlanDayExercise
        fields = ('exerciseId', 'workoutplanexercisessets')
    
    def to_representation(self, instance):
        rep = super(WorkoutPlanDayExerciseSerializer, self).to_representation(instance)
        rep['execise_name'] = instance.exerciseId.name
        rep['exercise_photo'] = instance.exerciseId.photo_link
        return rep


class WorkoutPlanDaySerializer(serializers.ModelSerializer):
    workoutplanexercises = WorkoutPlanDayExerciseSerializer(many=True, read_only=True)
    class Meta:
        model = WorkoutPlanDay
        fields = ('id', 'workoutPlanId', 'name', 'description', 'workoutplanexercises')


class WorkoutPlanSerializer(serializers.ModelSerializer): 
    workoutplanday = WorkoutPlanDaySerializer(many=True, read_only=True)
    class Meta:
        model = WorkoutPlan
        fields = ('userId', 'name', 'level', 'photo_link', 'description', 'workoutplanday')

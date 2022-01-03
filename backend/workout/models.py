from django.db import models
from users.models import CustomUser
from exercise.models import Exercise


class WorkoutPlan(models.Model):
    WorkoutPlanId = models.IntegerField(primary_key=True, blank=False, null=False)
    UserId = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.TextField(max_length=30, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)


class WorkoutPlanDay(models.Model):
    WorkoutPlanDayId = models.IntegerField(primary_key=True, blank=False, null=False)
    WorkoutPlanId = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    name = models.TextField(max_length=30, blank=False, null=False)
    description = models.TextField(max_length=500, blank=False, null=False)


class WorkoutPlanDay_Exercise(models.Model):
    WorkoutPlanDay_ExerciseId = models.IntegerField(primary_key=True, blank=False, null=False)
    WorkoutPlanDayId = models.ForeignKey(WorkoutPlanDay, on_delete=models.CASCADE)
    ExerciseId = models.ForeignKey(Exercise, on_delete=models.CASCADE)


class WorkoutPlanDay_Exercise_Sets(models.Model):
    WorkoutPlanDay_Exercise_SetsId = models.IntegerField(primary_key=True, blank=False, null=False)
    WorkoutPlanDay_ExerciseId = models.ForeignKey(WorkoutPlanDay_Exercise, on_delete=models.CASCADE)
    reps = models.IntegerField(blank=False, null=False)

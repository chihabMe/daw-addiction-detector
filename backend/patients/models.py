from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

User = get_user_model()


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    addiction_level = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="value must be greater than or equal to 0 "),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )
    average_hours_of_play_per_week = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(168, message="value must be less than or equal to 168"),
        ]
    )
    average_month_of_play = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )
    insomnia_score = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )
    excessive_sleepiness_score = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )
    anxiety_score = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )
    depression_score = models.PositiveIntegerField(
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="value must be less than or equal to 100"),
        ]
    )

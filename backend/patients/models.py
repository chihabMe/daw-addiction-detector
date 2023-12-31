from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models



class Patient(models.Model):
    user = models.OneToOneField("accounts.CustomUser", on_delete=models.CASCADE)
    addiction_level = models.PositiveIntegerField(
        blank=True,  # Allow empty values
        null=True,  # Allow null values
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    average_hours_of_play_per_week = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(168, message="Value must be less than or equal to 168"),
        ],
    )
    average_month_of_play = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    insomnia_score = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    excessive_sleepiness_score = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    anxiety_score = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    depression_score = models.PositiveIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0, message="Value must be greater than or equal to 0."),
            MaxValueValidator(100, message="Value must be less than or equal to 100"),
        ],
    )
    def __str__(self):
        return str(self.user)

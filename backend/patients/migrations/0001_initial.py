# Generated by Django 4.2.7 on 2023-11-03 22:02

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Patient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "addiction_level",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="value must be greater than or equal to 0 "
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "average_hours_of_play_per_week",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                168, message="value must be less than or equal to 168"
                            ),
                        ]
                    ),
                ),
                (
                    "average_month_of_play",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "insomnia_score",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "excessive_sleepiness_score",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "anxiety_score",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "depression_score",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                0, message="Value must be greater than or equal to 0."
                            ),
                            django.core.validators.MaxValueValidator(
                                100, message="value must be less than or equal to 100"
                            ),
                        ]
                    ),
                ),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]

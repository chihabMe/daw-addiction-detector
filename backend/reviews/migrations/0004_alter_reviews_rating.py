# Generated by Django 4.2.7 on 2023-12-01 18:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("reviews", "0003_rename_writer_reviews_user_alter_reviews_rating"),
    ]

    operations = [
        migrations.AlterField(
            model_name="reviews",
            name="rating",
            field=models.IntegerField(
                default=3,
                validators=[
                    django.core.validators.MinValueValidator(
                        1, message="Value must be greater than or equal to 1."
                    ),
                    django.core.validators.MaxValueValidator(
                        5, message="Value must be less than or equal to 5"
                    ),
                ],
            ),
        ),
    ]

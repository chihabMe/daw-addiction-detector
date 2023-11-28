# Generated by Django 4.2.7 on 2023-11-26 02:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_customuser_phone"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="user_type",
            field=models.CharField(
                choices=[("paitent", "paitent"), ("doctor", "doctor")],
                default="paitent",
                max_length=10,
            ),
        ),
    ]
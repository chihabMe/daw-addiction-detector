# Generated by Django 4.2.7 on 2023-11-26 02:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0003_customuser_user_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="user_type",
            field=models.CharField(
                choices=[
                    ("paitent", "paitent"),
                    ("doctor", "doctor"),
                    ("admin", "admin"),
                ],
                default="paitent",
                max_length=10,
            ),
        ),
    ]

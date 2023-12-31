# Generated by Django 4.2.7 on 2023-11-28 20:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0005_customuser_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="gender",
            field=models.CharField(
                choices=[(1, "male"), (2, "female")], default="M", max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="customuser",
            name="user_type",
            field=models.CharField(
                choices=[(1, "paitent"), (2, "doctor"), (3, "admin")],
                default="paitent",
                max_length=10,
            ),
        ),
    ]

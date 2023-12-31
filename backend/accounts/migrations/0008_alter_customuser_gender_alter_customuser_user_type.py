# Generated by Django 4.2.7 on 2023-12-01 11:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0007_rename_created_customuser_created_at_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="gender",
            field=models.CharField(
                choices=[(0, "male"), (1, "female")], default="M", max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="customuser",
            name="user_type",
            field=models.CharField(
                choices=[(0, "paitent"), (1, "doctor"), (2, "admin")],
                default="paitent",
                max_length=10,
            ),
        ),
    ]

# Generated by Django 4.2.7 on 2023-11-07 10:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("questions", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="question",
            name="title",
            field=models.CharField(default="", max_length=300),
            preserve_default=False,
        ),
    ]

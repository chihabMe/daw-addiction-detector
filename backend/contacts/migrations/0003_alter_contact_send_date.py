# Generated by Django 4.2.7 on 2023-11-24 01:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("contacts", "0002_contact_send_date"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contact",
            name="send_date",
            field=models.DateField(auto_now_add=True),
        ),
    ]
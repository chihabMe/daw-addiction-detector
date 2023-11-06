from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()
# Create your models here.
class Doctor(models.Model):
    user = models.OneToOneField(User, related_name="doctor", on_delete=models.CASCADE)
    specialty = models.CharField(max_length=200)

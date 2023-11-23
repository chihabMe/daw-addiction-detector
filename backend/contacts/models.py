from django.db import models

# Create your models here.
class Contact (models.Model):
    email= models.EmailField()
    phone_number= models.CharField(max_length=15)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    text= models.CharField(max_length=500)

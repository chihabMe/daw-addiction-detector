from django.db import models
from .validator import validate_phone_number


# Create your models here.
class Contact (models.Model):
    email= models.EmailField()
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    phone_number= models.CharField(max_length=15, validators=[validate_phone_number])
    text= models.CharField(max_length=500)
    send_date= models.DateTimeField(auto_now_add=True)

    
    
    def __str__(self) -> str:
        return self.first_name+self.last_name

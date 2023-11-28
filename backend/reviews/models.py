from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MaxLengthValidator , MinLengthValidator


User = get_user_model()
# Create your models here.

class Reviews(models.Model):
    writer= models.OneToOneField(User, on_delete=models.CASCADE)
    text= models.TextField(max_length=200)
    rating =models.IntegerField(default=3,validators=[
        MinLengthValidator(1,message=" value must be greater than or equals to 1 "),
        MaxLengthValidator(5,message="value must be less then or equals to 5 ")
    ]
                                )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.writer





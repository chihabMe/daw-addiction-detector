from django.db import models
from django.contrib.auth import get_user_model


from django.core.validators import MaxValueValidator , MinValueValidator


User = get_user_model()
# Create your models here.

class Reviews(models.Model):
    user= models.OneToOneField(User, on_delete=models.CASCADE)
    text= models.CharField(max_length=300)
    rating =models.IntegerField(default=3,validators=[
            MinValueValidator(1, message="Value must be greater than or equal to 1."),
            MaxValueValidator(5, message="Value must be less than or equal to 5"),
        ],
                                )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.user)
    





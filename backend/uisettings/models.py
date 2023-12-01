
from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()

class UiSettings(models.Model):
    class ThemeChoices(models.TextChoices):
        DARK = "DARK" ,"dark"
        LIGHT = "LIGHT" ,"light"
    class LanguageChoices(models.TextChoices):
        EN = "EN" , "en"
        AR = "AR" , "ar"
    class QtDisplayChoices(models.TextChoices):
        GRID = "GRID","grid"
        LIST = "LIST","list"
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    theme = models.BooleanField(max_length=5,default=ThemeChoices.LIGHT,choices=ThemeChoices.choices)
    language = models.CharField(max_length=2,default=LanguageChoices.EN,choices=LanguageChoices.choices)
    qt_display_type = models.CharField(max_length=4,choices=QtDisplayChoices.choices,default=QtDisplayChoices.LIST)
    qt_show_alph = models.BooleanField(default=True)

    def __str__(self):
        return self.user.username


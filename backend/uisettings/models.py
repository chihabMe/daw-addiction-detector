from django.db import models


class UiSettings(models.Model):
    class ThemeChoices(models.TextChoices):
        DARK = "dark", "Dark"
        LIGHT = "light", "Light"

    class LanguageChoices(models.TextChoices):
        EN = "en", "English"
        AR = "ar", "Arabic"

    class QtDisplayChoices(models.TextChoices):
        GRID = "grid", "Grid"
        LIST = "list", "List"

    user = models.OneToOneField("accounts.CustomUser", on_delete=models.CASCADE)
    theme = models.CharField(max_length=5, choices=ThemeChoices.choices, default=ThemeChoices.LIGHT)
    language = models.CharField(max_length=2, choices=LanguageChoices.choices, default=LanguageChoices.EN)
    qt_display_type = models.CharField(max_length=4, choices=QtDisplayChoices.choices, default=QtDisplayChoices.LIST)
    qt_show_alph = models.BooleanField(default=True)

    def __str__(self):
        return self.user.first_name

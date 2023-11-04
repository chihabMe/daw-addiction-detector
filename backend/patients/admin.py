from django.contrib import admin

from .models import Patient

# Register your models here.


class PatientAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "addiction_level",
        "average_hours_of_play_per_week",
        "average_month_of_play",
        "insomnia_score",
        "excessive_sleepiness_score",
        "anxiety_score",
        "depression_score",
    )
    list_filter = ()
    search_fields = ("user",)


admin.site.register(Patient, PatientAdmin)

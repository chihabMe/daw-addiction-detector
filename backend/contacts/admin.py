from django.contrib import admin
from .models import Contact
# Register your models here.

class AdminContacts (admin.ModelAdmin):
    list_display = (
        "email",
        "first_name",
        "text",
        "send_date",
    )

admin.site.register(Contact, AdminContacts)    
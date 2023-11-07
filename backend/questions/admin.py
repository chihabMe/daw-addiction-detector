from django.contrib import admin

from .models import Question, QuestionResponseOptions, QuestionType

# Register your models here.


class QuestionResponseOptionsInline(admin.TabularInline):
    model = QuestionResponseOptions
    extra = 4  # Number of response options to display initially


class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "creator",
        "title",
        "type",
        "points",
        "created",
        "updated",
    )
    list_filter = ("type",)
    search_fields = ("creator", "type")

    inlines = [QuestionResponseOptionsInline]


class QuestionTypeAdmin(admin.ModelAdmin):
    list_display = ("description", "creator", "title", "created", "updated")
    search_fields = ("description", "title")


class QuestionResponseOptionsAdmin(admin.ModelAdmin):
    list_display = ("text", "question", "created", "updated")


admin.site.register(Question, QuestionAdmin)
admin.site.register(QuestionType, QuestionTypeAdmin)
admin.site.register(QuestionResponseOptions, QuestionResponseOptionsAdmin)

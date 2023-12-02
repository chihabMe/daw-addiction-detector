from django.contrib import admin

from answers.models import Answer, AnswerItem

# Register your models here.

class AnswerAdmin(admin.ModelAdmin):
    
    list_display = ["user","answers","created_at","updated_at"]
    readonly_fields = ["created_at","updated_at","answers"]

    def answers(self,obj):
        return obj.items.count()

class AnswerItemAdmin(admin.ModelAdmin):
    list_display = ["answer","quetion_response_option"]

admin.site.register(Answer,AnswerAdmin)
admin.site.register(AnswerItem,AnswerItemAdmin)

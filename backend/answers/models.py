from django.contrib.auth import get_user_model
from django.db import models
from django.db.transaction import on_commit

from questions.models import Question, QuestionResponseOptions

# Create your models here.


User = get_user_model()


class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)


class AnswerItem(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE,related_name="items")
    question_response_option = models.ForeignKey(
        QuestionResponseOptions, on_delete=models.CASCADE
    )

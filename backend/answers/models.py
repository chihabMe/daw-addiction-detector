from django.db import models

from questions.models import Question, QuestionResponseOptions
from patients.models import Patient

# Create your models here.




class Answer(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.patient)


class AnswerItem(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE,related_name="answers")
    question_response_option = models.ForeignKey(
        QuestionResponseOptions, on_delete=models.CASCADE
    )

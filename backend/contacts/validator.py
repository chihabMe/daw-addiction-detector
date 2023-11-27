
from rest_framework import serializers

from django.core.exceptions import ValidationError





def validate_phone_number(phone_number):
        txt = "AZERTYUIOPQSDFGJKLWXCVBNNLKlM"
        
        for c in txt  :
            if c in phone_number  or c in txt.lower():

                raise ValidationError(
                     ("invalid phone number!")
                )
            
        return phone_number
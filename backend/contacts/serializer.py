from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["email","first_name","last_name","text","send_date"]
        def validate_phone_number(self,phone_number):
            for c in"AZERTYUIOPQSDFGJKLWXCVBNNLKlM":
                if c in phone_number:
                    return serializers.ValidationError("invalid phone number!")
            
            return phone_number

    
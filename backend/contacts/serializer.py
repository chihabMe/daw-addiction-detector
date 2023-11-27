from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["email","first_name","last_name","text","send_date", "phone_number"]
    def validate_phone_number(self,phone_number):
        txt = "AZERTYUIOPQSDFGJKLWXCVBNNLKlM"
        print("hifuc")
        for c in txt  :
            if c in phone_number or c in txt.upper() or c in txt.lower():

                raise serializers.ValidationError("invalid phone number!")
            
        return phone_number

    
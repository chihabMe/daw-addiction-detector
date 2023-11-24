from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import CurrentAuthUserSerializer

User = get_user_model()
# Create your views here.


class CurrentAuthUser(RetrieveAPIView):
    serializer_class = CurrentAuthUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

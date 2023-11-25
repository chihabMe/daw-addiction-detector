from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import CurrentAuthUserSerializer, TokenBlackListSerializer

User = get_user_model()
# Create your views here.


class CurrentAuthUser(RetrieveAPIView):
    serializer_class = CurrentAuthUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class ObtainTokenView(TokenObtainPairView):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["first_name"] = user.first_name
        token["email"] = user.email
        return token


class TokenBlackListView(APIView):
    def post(self, request):
        serializer = TokenBlackListSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            try:
                token = RefreshToken(serializer.data.get("refresh"))
                token.blacklist()
            except:
                pass
            return Response("success")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

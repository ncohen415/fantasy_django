from django.shortcuts import render
from rest_framework import (
    viewsets,
    permissions
)
from ..models import (
    CustomUser,
)
from ..serializers import (
    CustomUserSerializer,
)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import (
    permissions,
    status
)
from fantasy_api.serializers import (
    CustomUserSerializer
)
import uuid

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]

class RegisterUserView(APIView):
    http_method_names = ["post"]
    # logic for registering new user account
    def post(self, request):
        try: 
            data = request.data['data']
            clerk_id = data['id']
            first_name = data["first_name"]
            last_name = data["last_name"]
            email = data['email_addresses'][0]['email_address']
            password = str(uuid.uuid4())


            if not CustomUser.objects.filter(clerk_id=clerk_id, email=email).exists():
                user = CustomUser.objects.create_user(
                    clerk_id=clerk_id,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    password=password,
                )
                user.save()
                if CustomUser.objects.filter(clerk_id=clerk_id).exists():
                    return Response(
                        {"success", "Account created!"},
                        status=status.HTTP_201_CREATED,
                    )
                else:
                    print(1)
                    return Response(
                        {"error": "Something went wrong when trying to create account"},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    ) 
            else:
                print(2)
                return Response(
                    {"error": "Account already made with that email"},
                    status=status.HTTP_400_BAD_REQUEST,
                )


        except:
            return Response(
                {'error': "Something went wrong when trying to register account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UpdateUserView(APIView):
    http_method_names = ["post"]
    def post(self, request):
        try:
            data = request.data['data']
            email = data['email_addresses'][0]['email_address']
            first_name = data['first_name']
            last_name = data["last_name"]
            clerk_id = data["id"]
            user = CustomUser.objects.filter(clerk_id=clerk_id)[0]
            if clerk_id == user.clerk_id and email == user.email:
                if email != user.email:
                    user.email = email
                
                if first_name != user.first_name:
                    user.first_name = first_name
                
                if last_name != user.last_name:
                    user.last_name = last_name

                user.save()

            return Response(
                {"success": "Account Updated"}
            )

        except:
            return Response(
                {"error": "Something went wrong when updating this account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class DeleteUserView(APIView):
    http_method_names = ["post"]
    def post(self, request):
        try:
            data = request.data['data']
            deleted = data['deleted']
            # clerk_id = data["id"]
            clerk_id = "user_29w83sxmDNGwOuEthce5gg56FcC"
            user = CustomUser.objects.filter(clerk_id=clerk_id)[0]


            if deleted:
                user.delete()
                return Response(
                    {"success": "Account Deleted"}
                )
        except:
            return Response(
                {"error": "Something went wrong deleting this account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            ) 


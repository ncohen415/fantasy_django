from rest_framework import serializers
from .models import (
    CustomUser
)

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            "email",
            "is_staff",
            "is_active",
            "is_superuser",
            "date_joined",
            "first_name",
            "last_name",
            "clerk_id",
        )
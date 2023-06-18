from django.urls import path
from fantasy_api.views.auth_views import (
    RegisterUserView,
    UpdateUserView,
    DeleteUserView,
)

urlpatterns = [
    path('register', RegisterUserView.as_view()),
    path('update', UpdateUserView.as_view()),
    path('delete', DeleteUserView.as_view()),
]
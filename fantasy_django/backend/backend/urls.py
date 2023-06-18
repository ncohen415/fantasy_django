
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from fantasy_api.views import auth_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


router = routers.DefaultRouter()
router.register(r'custom-users', auth_views.CustomUserViewSet, basename="custom-users")

urlpatterns = [
    path("", include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name="token"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('api/token/verify/', TokenVerifyView.as_view(), name ="verify"),
    path('api/accounts/', include('fantasy_api.urls')),
]


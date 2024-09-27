from django.urls import path
from home_app.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register-user'),
    path('profile/', views.get_userProfile, name='get_userProfile'),
    path('', views.get_users, name='get_users'),
]

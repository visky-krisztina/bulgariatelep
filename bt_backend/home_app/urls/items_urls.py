from django.urls import path
from home_app.views import items_views as views

urlpatterns = [
    path('', views.getItems, name='items'),
    path('<str:pk>', views.getItem, name='item'),
]

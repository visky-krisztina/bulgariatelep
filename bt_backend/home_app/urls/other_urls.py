from home_app.views import other_views as views

from django.urls import path

urlpatterns = [
    path('events/', views.getEvents, name='get_events'),
    path('mainSlider/', views.getMainSliderData, name='get_mainSliderData'),
    path('mainSlider/<str:pk>', views.getMainSlide, name='get_MainSlide'),
    path('navbar-items/', views.get_nav_items, name='nav_items'),
    path('hero/', views.get_hero, name='get_hero'),
    path('preachers/', views.get_preacher, name='get_preacher'),
    path('sermons/', views.get_sermons, name='get_sermons'),
    path('dailyVerses/', views.get_dailyVerses, name='get_dailyVerses'),
]

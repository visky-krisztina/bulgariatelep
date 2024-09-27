from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from home_app import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/items/', include('home_app.urls.items_urls')),
    path('api/user/', include('home_app.urls.user_urls')),
    path('api/other/', include('home_app.urls.other_urls')),
    path('', TemplateView.as_view(template_name='build/index.html'), name='home'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

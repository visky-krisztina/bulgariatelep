from django.contrib import admin
from .models import *
# Register your models here.

class NavItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'path', 'cName', 'parent')
    list_filter = ('parent',)
    search_fields = ('title', 'path')


admin.site.register(Item)
admin.site.register(Event)
admin.site.register(MainSliderData)
admin.site.register(NavItem, NavItemAdmin)
admin.site.register(Hero)
admin.site.register(Preacher)
admin.site.register(Sermon)
admin.site.register(DailyVerses)

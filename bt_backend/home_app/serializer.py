from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'  # Or specify the exact fields you want to include

    def validate_user(self, value):
        if value == 'null' or value is None:  # Allow both string 'null' and None
            return None
        return value

class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    

class SermonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sermon
        fields = '__all__'
        
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class MainSliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainSliderData
        fields = '__all__'

class NavItemSerializer(serializers.ModelSerializer):
    sub_items = serializers.SerializerMethodField()

    class Meta:
        model = NavItem
        fields = ['id', 'title', 'path', 'cName', 'sub_items']

    def get_sub_items(self, obj):
        # Get all sub-items associated with the parent item
        sub_items = obj.sub_items.all()
        return NavItemSerializer(sub_items, many=True).data
    

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = '__all__'

class DailyVersesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyVerses
        fields = '__all__'

class PreacherSerializer(serializers.ModelSerializer):
    custom_name = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Preacher
        fields = '__all__'

    def validate(self, data):
        name = data.get('name')
        custom_name = data.get('custom_name')

        # If "Other" is selected, ensure the custom name is provided
        if name == 'other' and not custom_name:
            raise serializers.ValidationError({"custom_name": "Please provide a custom name."})
        
        return data
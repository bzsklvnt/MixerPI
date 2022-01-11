from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'auth_token', 'is_superuser']
        extra_kwargs = {
            'password': {'write_only': True, 'required' : True},
            # 'auth_token': {'write_only': True},
            # 'is_superuser': {'write_only': True},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class CocktailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cocktail
        fields = ['name', 'ingredients', 'image', 'image_url']

    # def set_ingredients_list(self, obj):
    #     ing_list = []
    #     for elem in Cocktail.objects.all():
    #         print(elem)
        

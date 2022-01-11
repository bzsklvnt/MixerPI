from django.shortcuts import render

# Create your views here.
import json
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render

# Create your views here.

class LoginView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        data = data["body"]
        
        if(data["username"] and data["password"]):
            query_set = User.objects.all().filter(username=data['username']).first()
            serializer = UserSerializer(query_set)
            return Response(serializer.data, status=status.HTTP_200_OK,)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SignUpView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        data = data["body"]
        
        if(data["username"] and data["password"] and data["passwordConfirm"]):
            if User.objects.filter(username=data['username']).first()==None:

                serializer_class = UserSerializer()
                del data['passwordConfirm']
                serializer_class.create(data)

                return Response(status=status.HTTP_200_OK)
            return Response(json.dumps({"error_detail": "Username already in use"}), status=status.HTTP_200_OK)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class GetCocktailView(APIView):
    def get(self, request):
        serializer = CocktailSerializer(Cocktail.objects.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class AddCocktailView(APIView):
    def post(self, request):
        data = json.loads(request.body)
        return Response(data=data, status=status.HTTP_200_OK)


class CurrentUserByIdView(APIView):
    def get(self, request, id):
        user = User.objects.all().filter(id=id).first()
        serializer_class = UserSerializer(user)
        print(serializer_class.data)
        return Response(serializer_class.data)

class AdminView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        pass
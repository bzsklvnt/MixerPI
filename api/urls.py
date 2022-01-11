from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('current-user/<id>', CurrentUserByIdView().as_view()),
    path('sign-up/', SignUpView().as_view()),
    path('login/', LoginView().as_view()),
    path('get-cocktail-list/', GetCocktailView().as_view()),
    path('add-cocktail/', AddCocktailView().as_view()),
    path('admin-site/', AdminView().as_view()),
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
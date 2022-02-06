from django.urls import path, include
from .import views


urlpatterns = [
    path('profile-page/', views.AccountData.as_view()),
    # path('profile-page/<str:pk>/', views.AccountData.as_view()),
]

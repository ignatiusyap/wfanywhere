from django.urls import path, include
from .import views


urlpatterns = [
    path('all-profiles/', views.ShopAccountsData.as_view()),
    path('profile-page/<str:pk>/', views.AccountDetails.as_view()),
    path('create-account/', views.AccountCreate.as_view()),
]

from django.urls import path, include
from .import views


urlpatterns = [
    path('all-shops/', views.MerchantData.as_view()),
    path('shop/<str:pk>/', views.MerchantDetails.as_view()),
    path('shop-name/', views.MerchantCreate.as_view()),
]

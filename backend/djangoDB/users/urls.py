from django.urls import path, include
from .import views


urlpatterns = [
    path('all-profiles/', views.ShopAccountsData.as_view()),
    path('profile-page/<str:pk>/', views.AccountDetails.as_view()),
    path('create-account/', views.AccountCreate.as_view()),
    path('merchants/shop/review/<str:pk>/', views.ReviewsAll.as_view()),
    path('merchants/shop/editreview/<str:pk>/', views.ReviewEdit.as_view()),
    path('merchants/shop/deletereview/<str:pk>/', views.ReviewEdit.as_view()),
]

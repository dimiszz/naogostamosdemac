from django.urls import path
from logic import views

urlpatterns = [
    path("", views.home, name="home"),
]

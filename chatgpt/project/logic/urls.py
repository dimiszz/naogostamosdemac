from django.urls import path
from logic import views

urlpatterns = [
    path("", views.home, name="home"),
    path("", views.resumos_respostas, name="resumos_respostas")
]

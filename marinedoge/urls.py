from django.urls import path
from marinedoge import views

urlpatterns = [
    path('', views.index, name='index'),
]

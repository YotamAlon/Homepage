from django.conf.urls import url
from AboutMe import views

urlpatterns = [
    url('^resume/$', views.resume),
    url('^projects/$', views.projects),
    url('^$', views.index),
]

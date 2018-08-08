from django.conf.urls import url
from AboutMe import views

urlpatterns = [
    url('^resume/$', views.resume, name='resume'),
    url('^projects/$', views.projects, name='projects'),
    url('^$', views.homepage, name='homepage'),
]

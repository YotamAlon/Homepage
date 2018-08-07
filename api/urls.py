from django.conf.urls import url
from api.views import ProjectViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('projects', ProjectViewSet, base_name='project')

urlpatterns = router.urls
from django.contrib import admin

from Homepage.models import Resume, Resource, Project, Course, Idea

admin.site.register([
    Resume, Resource, Project, Course, Idea
])

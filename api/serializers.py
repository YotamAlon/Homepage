from rest_framework import serializers


from AboutMe.models import Project
class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'title', 'link', 'description', 'status')

from rest_framework import serializers


from AboutMe.models import Project
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'link', 'description', 'status')


from AboutMe.models import Resource
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ('id', 'title', 'description', 'link', 'package')


from AboutMe.models import Resume
class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ('id', 'pdf_file', 'doc_file')


from AboutMe.models import Course
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'date', 'description')


from AboutMe.models import Idea
class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ('id', 'title', 'description')

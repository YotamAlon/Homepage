from django.shortcuts import render_to_response


def index(request):
    return render_to_response('Homepage/homepage.html')


def resume(request):
    from Homepage.models import Resume
    resume = Resume.objects.all().first()
    return render_to_response('Homepage/resume.html', {'resume': resume})


def projects(request):
    from Homepage.models import Project
    projects = Project.object.all()
    return render_to_response('Homepage/projects.html', {'projects': projects})



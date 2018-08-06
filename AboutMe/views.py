from django.shortcuts import render_to_response


def index(request):
    return render_to_response('AboutMe/homepage.html')


def resume(request):
    from AboutMe.models import Resume
    resume = Resume.objects.all().first()
    return render_to_response('AboutMe/resume.html', {'resume': resume})


def projects(request):
    from AboutMe.models import Project
    projects = Project.object.all()
    return render_to_response('AboutMe/projects.html', {'projects': projects})



from django.shortcuts import render_to_response


def homepage(request):
    is_ajax = request.is_ajax()
    template = 'AboutMe/' + ('_' if is_ajax else '') + 'homepage.html'
    return render_to_response(template)


def resume(request):
    is_ajax = request.is_ajax()
    from AboutMe.models import Resume
    resume = Resume.objects.all().first()
    template = 'AboutMe/' + ('_' if is_ajax else '') + 'resume.html'
    return render_to_response(template, {'resume': resume})


def projects(request):
    is_ajax = request.is_ajax()
    from AboutMe.models import Project
    projects = Project.object.all()
    template = 'AboutMe/' + ('_' if is_ajax else '') + 'projects.html'
    return render_to_response(template, {'projects': projects})



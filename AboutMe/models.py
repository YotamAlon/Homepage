from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=256)
    date = models.DateField()
    description = models.TextField()


class Resume(models.Model):
    pdf_file = models.FileField(null=True, blank=True)
    doc_file = models.FileField(null=True, blank=True)


class Project(models.Model):
    title = models.CharField(max_length=256)
    link = models.CharField(max_length=512)
    description = models.TextField()
    status = models.CharField(max_length=64)


class Resource(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    link = models.CharField(max_length=512)
    package = models.FileField(null=True, blank=True)


class Idea(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()

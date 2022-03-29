from django.db import models

from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=32)
    url = models.URLField()
    users = models.ManyToManyField(User)


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    create_date = models.DateTimeField()
    update_date = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    active = models.BooleanField()


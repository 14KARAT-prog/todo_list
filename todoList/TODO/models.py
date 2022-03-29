from django.db import models

from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=32)
    url = models.URLField()
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(null=True,blank=True)
    create_date = models.DateTimeField()
    update_date = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    active = models.BooleanField()


import email
from enum import unique
from pickle import UNICODE
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.forms import EmailField

# Create your models here.


class User(AbstractUser):
    email = models.EmailField(unique=True)
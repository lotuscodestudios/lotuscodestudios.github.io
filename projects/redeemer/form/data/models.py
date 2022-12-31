from django.db import models

# Create your models here.
class UserData(models.Model):
    username = models.CharField(maxlength=30)
    password = models.CharField(default="0000", maxlength=30)



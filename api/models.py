from django.db import models
from django.contrib.postgres.fields import ArrayField
import base64, os, requests, json
from requests.sessions import default_headers
from jsoneditor.fields.django3_jsonfield import JSONField


# Create your models here.
# class Cocktail(models.Model):
#     name = models.CharField(max_length=100)
#     ingredients = ArrayField(models.JSONField())
#     image = models.ImageField(upload_to='images', default='default.png')
#     image_url = models.TextField(default='nopic')

#     def save(self):
#         encodedString = base64.b64encode(self.image.file.read())
#         data = {"key": os.environ.get("IMG_BB"), "image": encodedString.decode("utf-8")}
#         uploadedImageInfo = requests.post("https://api.imgbb.com/1/upload", data=data)
#         jsonResponse = json.loads(uploadedImageInfo.text)
#         print(jsonResponse["data"]["display_url"])
#         self.image_url = jsonResponse["data"]["display_url"]
#         super().save()

#     def __str__(self):
#         return self.name

#     class Meta:
#         ordering = ['name',]

class Cocktail(models.Model):
    name = models.CharField(max_length=100)
    ingredients = JSONField()
    image = models.ImageField(upload_to='images', default='default.png')
    image_url = models.TextField(default='nopic')

    def save(self):
        encodedString = base64.b64encode(self.image.file.read())
        data = {"key": os.environ.get("IMG_BB"), "image": encodedString.decode("utf-8")}
        uploadedImageInfo = requests.post("https://api.imgbb.com/1/upload", data=data)
        jsonResponse = json.loads(uploadedImageInfo.text)
        self.image_url = jsonResponse["data"]["display_url"]
        super().save()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name',]

# Manhattan
# {"bourbon": 2},{"sweet red vermouth": 1}
# Martini
# {"gin": 2},{"vermouth": 1}
# Negroni
# {"gin": 1},{"sweet vermouth": 1},{"campari": 1}
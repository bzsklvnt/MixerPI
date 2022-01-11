from django.contrib import admin
from django.db.models import JSONField
from jsoneditor.forms import JSONEditor
from . import models

# Register your models here.

admin.site.register(models.Cocktail)

class MyAdmin(admin.ModelAdmin):
    formfield_overrides = {
        JSONField:{ 'widget':JSONEditor },
    }

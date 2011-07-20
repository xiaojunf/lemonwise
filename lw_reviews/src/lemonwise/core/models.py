from django.contrib.auth.models import User
from django.db import models
from django_extensions.db import fields


class AuditModel(models.Model):
    date_created = fields.CreationDateTimeField()
    created_by = models.ForeignKey(User, null=True, blank=True,
        related_name="%(class)s_created")
    date_updated = fields.ModificationDateTimeField()
    updated_by = models.ForeignKey(User, null=True, blank=True,
        related_name="%(class)s_updated")

    class Meta:
        abstract = True
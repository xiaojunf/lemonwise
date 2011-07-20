from django.contrib import admin
from lemonwise.core.widget import GenericForeignKeyRawIdWidget


def check_for_generic_field(admin_class, instance, db_field, **kwargs):
    if db_field.name in [f.fk_field for f in instance.model._meta.virtual_fields if f.name in instance.generic_fields]:
        for gfk in instance.model._meta.virtual_fields:
            if gfk.fk_field == db_field.name:
                return db_field.formfield(widget=GenericForeignKeyRawIdWidget(gfk.ct_field,
                    instance.admin_site._registry.keys()))

    return super(admin_class, instance).formfield_for_dbfield(db_field, **kwargs)
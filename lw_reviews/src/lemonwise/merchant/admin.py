from django.contrib import admin
from lemonwise.core.admin import check_for_generic_field
from lemonwise.merchant.models import Merchant, Category, CategoryWidget, \
    Product


class CategoryModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'merchant', 'parent',)
    search_fields = ('id', 'name', 'merchant__name', 'parent__name',)
    raw_id_fields = ('merchant', 'parent', 'created_by', 'updated_by',)
    list_per_page = 25


class CategoryWidgetModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'widget_type', 'widget_id',)
    search_fields = ('id', 'category__name', 'widget_type__app_label',
        'widget_type__model',)
    raw_id_fields = ('category', 'created_by', 'updated_by',)
    list_per_page = 25
    generic_fields  = ('widget',)

    def formfield_for_dbfield(self, db_field, **kwargs):
        return check_for_generic_field(CategoryWidgetModelAdmin, self,
            db_field, **kwargs)


class ProductModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'sku', 'category',)
    search_fields = ('id', 'name', 'sku', 'category__name',)
    raw_id_fields = ('category', 'created_by', 'updated_by',)
    list_per_page = 25


admin.site.register(Merchant)
admin.site.register(Category, CategoryModelAdmin)
admin.site.register(CategoryWidget, CategoryWidgetModelAdmin)
admin.site.register(Product, ProductModelAdmin)
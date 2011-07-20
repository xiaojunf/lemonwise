from django.contrib import admin
from lemonwise.widget.models import ThumbsWidget, SliderWidget, SliderStep, \
    SelectListWidget, SelectListItem


class ThumbsWidgetModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'merchant', 'title', 'description',)
    search_fields = ('id', 'merchant__name', 'title', 'description',)
    raw_id_fields = ('merchant', 'created_by', 'updated_by',)
    list_per_page = 25


class SliderWidgetModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'merchant', 'title', 'description', 'min_value',
        'max_value',)
    search_fields = ('id', 'merchant__name', 'title', 'description',)
    raw_id_fields = ('merchant', 'created_by', 'updated_by',)
    list_per_page = 25


class SelectListWidgetModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'merchant', 'title', 'description',
        'allows_multiple',)
    search_fields = ('id', 'merchant__name', 'title', 'description',)
    raw_id_fields = ('merchant', 'created_by', 'updated_by',)
    list_per_page = 25


class SelectListItemModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'list', 'title', 'description', 'value',)
    search_fields = ('id', 'list__title', 'title', 'description', 'value',)
    raw_id_fields = ('list', 'created_by', 'updated_by',)
    list_per_page = 25



admin.site.register(ThumbsWidget, ThumbsWidgetModelAdmin)
admin.site.register(SliderWidget, SliderWidgetModelAdmin)
admin.site.register(SliderStep)
admin.site.register(SelectListWidget, SelectListWidgetModelAdmin)
admin.site.register(SelectListItem, SelectListItemModelAdmin)
from django.contrib import admin
from lemonwise.core.admin import check_for_generic_field
from lemonwise.reviews.models import Review, ReviewWidget, HelpfulVote


class ReviewModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'would_recommend', 'title', 'message',
        'name', 'location',)
    search_fields = ('id', 'product__name', 'would_recommend', 'title',
        'message', 'name', 'location',)
    raw_id_fields = ('product', 'created_by', 'updated_by',)
    list_per_page = 25


class ReviewWidgetModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'review', 'widget_type', 'widget_id', 'value',)
    search_fields = ('id', 'review__name', 'review__title',
        'widget_type__app_label', 'widget_type__model', 'value',)
    raw_id_fields = ('review', 'created_by', 'updated_by',)
    list_per_page = 25
    generic_fields  = ('widget',)

    def formfield_for_dbfield(self, db_field, **kwargs):
        return check_for_generic_field(ReviewWidgetModelAdmin, self,
            db_field, **kwargs)


class HelpfulVoteModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'review', 'is_helpful', 'user',)
    search_fields = ('id', 'review__name', 'is_helpful', 'user__first_name',
        'user__last_name',)
    raw_id_fields = ('review', 'user', 'created_by', 'updated_by',)
    list_per_page = 25


admin.site.register(Review, ReviewModelAdmin)
admin.site.register(ReviewWidget, ReviewWidgetModelAdmin)
admin.site.register(HelpfulVote, HelpfulVoteModelAdmin)
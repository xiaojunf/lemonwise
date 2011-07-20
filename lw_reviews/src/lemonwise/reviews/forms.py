from django import forms
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ObjectDoesNotExist

class ThumbsField(forms.Field):
    "allows value to be True or False but not blank."
    
    def to_python(self, value):
        "Normalize values to True, False, or raise a ValidationError"

        if value:
            lower = value.lower()
            if lower == 'true':
                return True
            elif lower == 'false':
                return False
            else:
                raise forms.ValidationError("Value must be boolean.")
        else:
            raise forms.ValidationError("This field is required.")


class ReviewForm(forms.Form):
    title = forms.CharField(max_length=100)
    message = forms.CharField(max_length=500)
    name = forms.CharField(max_length=100)
    location = forms.CharField(max_length=100,required=False)
    would_recommend = ThumbsField()
    product_id = forms.IntegerField()


class CommentCreateForm(forms.Form):
    content_type_id = forms.IntegerField()
    object_id = forms.IntegerField()
    name = forms.CharField(min_length=1, max_length=50)
    message = forms.CharField(min_length=1)

    def clean_content_type_id(self):
        content_type_id = self.cleaned_data.get('content_type_id')

        try:
            self.cleaned_data['content_type'] = ContentType.objects.get(
                pk=content_type_id)

        except ContentType.DoesNotExist:
            raise forms.ValidationError('Invalid content type')

        return content_type_id

    def clean_object_id(self):
        object_id = self.cleaned_data.get('object_id')

        try:
            self.cleaned_data['object'] = self.cleaned_data[
                'content_type'].get_object_for_this_type(pk=object_id)

        except ObjectDoesNotExist:
            forms.ValidationError('Invalid object')

        return object_id

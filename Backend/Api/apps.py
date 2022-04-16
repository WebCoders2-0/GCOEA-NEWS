from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Api'


from import_export import resources

# from core.models import Book

# class BookResource(resources.ModelResource):
#     class Meta:
#         model = Book
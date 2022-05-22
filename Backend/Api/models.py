from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

<<<<<<< Updated upstream
# Create your models here.
# class Student(models.Model):
#     name = models.CharField(max_length=200,null=True,blank=True)
#     roll_no = models.CharField(max_length=100,null=True,blank=True)

#     def __str__(self):
#         return str(self.name)

# class Subject(models.Model):
#     date = models.DateField(auto_now=False,auto_now_add=False,null=True,blank=True)
#     subject = models.CharField(max_length=300,null=True,blank=True)

#     def __str__(self):
#         return str(self.subject)
    


# class Attendance(models.Model):
#     subject  = models.ForeignKey(Subject, on_delete=models.CASCADE,null=True,blank=True)
#     student = models.ForeignKey(Student, on_delete=models.CASCADE,null=True,blank=True)
#     is_present  = models.BooleanField(default=False)

#     def __str__(self):
#         return str(self.student) + str(self.subject)
    
=======

class MainUser(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=300)
    email = models.EmailField(max_length=256)
    mobile_no = models.CharField(max_length=15,null=True,blank=True)
    user_type = models.CharField(max_length=50, default='Public')
    register_id = models.CharField(max_length=15, blank=True, null=True)
    admin = models.BooleanField(default=False)
    profile = models.ImageField(upload_to='profile_pics', blank=True, null=True)
    email_verify = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)


class News(models.Model):
    author = models.ForeignKey(MainUser, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=100, unique=True,null=True,blank=True)
    title = models.CharField(max_length=10000)
    news_type = models.CharField(max_length=100)
    description = models.TextField(default='')
    image = models.ImageField(upload_to='news_pics',null=True,blank = True)
    created_datetime = models.DateTimeField(auto_now_add=True)
    notice_pdf = models.FileField(upload_to='notices', max_length=100,null=True,blank=True)
    notice_send = models.BooleanField(default=False)
    for_user = models.CharField(max_length=200,default='Public')

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        title = self.title + str(self.id)
        self.slug = slugify(title)
        super(News, self).save(*args, **kwargs)

class FavouriteNews(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    created_datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user.username) + '-' + str(self.news.title)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    comment = models.TextField(default='')
    created_datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user.username) + '-' + str(self.news.title)
>>>>>>> Stashed changes

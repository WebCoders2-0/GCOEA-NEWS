from django.db import models

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
    

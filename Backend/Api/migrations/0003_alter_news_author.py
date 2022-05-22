# Generated by Django 4.0.4 on 2022-05-20 15:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_news_for_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Api.mainuser'),
        ),
    ]
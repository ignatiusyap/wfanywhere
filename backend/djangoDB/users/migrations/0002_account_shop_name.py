# Generated by Django 4.0.2 on 2022-02-08 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='shop_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
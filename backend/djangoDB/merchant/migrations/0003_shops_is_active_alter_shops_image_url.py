# Generated by Django 4.0.2 on 2022-02-08 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('merchant', '0002_shops_description_shops_image_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shops',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='shops',
            name='image_url',
            field=models.URLField(null=True),
        ),
    ]
# Generated by Django 5.1 on 2024-09-24 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home_app', '0023_item_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

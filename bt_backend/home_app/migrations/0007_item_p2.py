# Generated by Django 5.1 on 2024-09-03 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home_app', '0006_alter_item_page'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='p2',
            field=models.TextField(blank=True, null=True),
        ),
    ]
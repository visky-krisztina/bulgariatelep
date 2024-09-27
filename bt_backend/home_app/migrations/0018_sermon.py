# Generated by Django 5.1 on 2024-09-15 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home_app', '0017_alter_preacher_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sermon',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, max_length=300, null=True)),
                ('pastor', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.DateTimeField(blank=True, null=True)),
                ('book', models.CharField(blank=True, max_length=200, null=True)),
                ('series', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
    ]

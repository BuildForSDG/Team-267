# Generated by Django 3.0.6 on 2020-06-02 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produce',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('thumbnail', models.ImageField(null=True, upload_to='')),
                ('category', models.CharField(default='', max_length=100)),
                ('description', models.TextField()),
                ('farmer_id', models.CharField(default='', max_length=50, unique=True)),
                ('farm_id', models.CharField(default='', max_length=12)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]

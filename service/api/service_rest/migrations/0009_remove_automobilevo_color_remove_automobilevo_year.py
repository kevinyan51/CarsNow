# Generated by Django 4.0.3 on 2023-03-10 19:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_alter_automobilevo_color_alter_automobilevo_year'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
    ]
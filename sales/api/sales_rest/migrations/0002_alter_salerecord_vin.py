# Generated by Django 4.0.3 on 2023-03-08 17:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salerecord',
            name='vin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salerecord', to='sales_rest.automobilevo'),
        ),
    ]
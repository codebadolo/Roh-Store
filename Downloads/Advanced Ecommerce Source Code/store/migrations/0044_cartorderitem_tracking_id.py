# Generated by Django 3.2.18 on 2023-04-12 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0043_cartorderitem_paid_vendor'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartorderitem',
            name='tracking_id',
            field=models.CharField(blank=True, max_length=100000, null=True),
        ),
    ]

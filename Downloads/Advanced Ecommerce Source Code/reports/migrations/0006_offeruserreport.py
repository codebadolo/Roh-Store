# Generated by Django 3.2.18 on 2023-06-06 18:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import shortuuid.django_fields


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0045_remove_coupon_flatrate_amount'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('store', '0099_auto_20230605_2351'),
        ('reports', '0005_alter_generalissue_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='OfferUserReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(blank=True, null=True)),
                ('block_user', models.BooleanField(default=False)),
                ('resolved', models.BooleanField(default=False)),
                ('pid', shortuuid.django_fields.ShortUUIDField(alphabet='abcdefghijklmnopqrstuvxyz', length=10, max_length=20, prefix='', unique=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('product_offer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='offer_report', to='store.productoffers')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='offer_reporting_user', to=settings.AUTH_USER_MODEL)),
                ('vendor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='offer_reporting_user', to='vendor.vendor')),
            ],
            options={
                'verbose_name_plural': 'Offer User Report',
            },
        ),
    ]

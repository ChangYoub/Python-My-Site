# Generated by Django 2.0.7 on 2018-08-22 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'verbose_name': 'Profile', 'verbose_name_plural': 'profiles'},
        ),
        migrations.AddField(
            model_name='profile',
            name='zipcode',
            field=models.CharField(default=1, max_length=5),
            preserve_default=False,
        ),
    ]

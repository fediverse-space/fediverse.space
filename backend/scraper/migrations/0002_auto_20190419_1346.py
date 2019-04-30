# Generated by Django 2.1.7 on 2019-04-19 13:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='edge',
            name='source',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='targets', to='scraper.Instance'),
        ),
        migrations.AlterField(
            model_name='edge',
            name='target',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sources', to='scraper.Instance'),
        ),
    ]
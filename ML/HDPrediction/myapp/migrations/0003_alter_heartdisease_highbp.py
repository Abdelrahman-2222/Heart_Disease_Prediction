# Generated by Django 4.1 on 2023-03-21 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0002_remove_heartdisease_heartdiseaseorattack_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="heartdisease",
            name="HighBP",
            field=models.BooleanField(),
        ),
    ]

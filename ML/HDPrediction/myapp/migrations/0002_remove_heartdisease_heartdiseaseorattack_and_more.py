# Generated by Django 4.1 on 2023-03-21 00:08

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="heartdisease",
            name="HeartDiseaseorAttack",
        ),
        migrations.AddField(
            model_name="heartdisease",
            name="result",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="heartdisease",
            name="submitted_time",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="AnyHealthcare",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="BMI",
            field=models.IntegerField(
                null=True,
                validators=[
                    django.core.validators.MinValueValidator(10),
                    django.core.validators.MaxValueValidator(50),
                ],
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="Diabetes",
            field=models.IntegerField(
                choices=[(0, "NO"), (1, "Type 1"), (2, "Type 2")]
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="DiffWalk",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="GenHlth",
            field=models.IntegerField(
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(5),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="HvyAlcoholConsump",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="Income",
            field=models.IntegerField(
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(8),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="MentHlth",
            field=models.IntegerField(
                validators=[
                    django.core.validators.MinValueValidator(0),
                    django.core.validators.MaxValueValidator(30),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="NoDocbcCost",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="PhysActivity",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="PhysHlth",
            field=models.IntegerField(
                validators=[
                    django.core.validators.MinValueValidator(0),
                    django.core.validators.MaxValueValidator(30),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="Sex",
            field=models.CharField(
                choices=[("M", "MALE"), ("F", "FEMALE")], max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="Smoker",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="heartdisease",
            name="Stroke",
            field=models.IntegerField(),
        ),
    ]

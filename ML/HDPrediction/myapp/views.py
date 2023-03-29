# import joblib
# import numpy as np
# from ML.HDPrediction.myapp.models import HeartDisease
#
# from django.db.models.signals import post_save
# from django.dispatch import receiver
#
#
# @receiver(post_save, sender=HeartDisease)
# def apply_nn_model(sender, instance, created, **kwargs):
#     if created:
#         model = joblib.load('D:/Abelrahman/grad_project/ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#         X = np.array(
#             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker, instance.Stroke,
#               instance.Diabetes, instance.PhysActivity,
#               instance.Fruits, instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare,
#               instance.NoDocbcCost,
#               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#               1 if instance.Sex == 'M' else 0, instance.Age]])
#         result = model.predict(X)[0]
#         instance.result = result
#         instance.save()
#
#
# heart_disease_obj = HeartDisease.objects.get(id=1)
# apply_nn_model(heart_disease_obj)

# import logging
#
# logger = logging.getLogger(__name__)
# logger.setLevel(logging.DEBUG)


# def apply_nn_model(sender, instance, created, **kwargs):
#     if created:
#         logger.debug('New HeartDisease instance created: %s', instance)
#         model = joblib.load('D:/Abelrahman/grad_project/ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#         X = np.array(
#             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker, instance.Stroke,
#               instance.Diabetes, instance.PhysActivity,
#               instance.Fruits, instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare,
#               instance.NoDocbcCost,
#               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#               1 if instance.Sex == 'M' else 0, instance.Age]])
#         result = model.predict(X)[0]
#         instance.result = result
#         instance.save()
#         logger.debug('Result status updated for HeartDisease instance: %s', instance)
#     else:
#         logger.debug('HeartDisease instance updated: %s', instance)
#
#


# manually added
# import joblib


# patient_data = {
#     'HighBP': 0,
#     'HighChol': 1,
#     'CholCheck': 0,
#     'BMI': 26,
#     'Smoker': 0,
#     'Stroke': 0,
#     'Diabetes': 0,
#     'PhysActivity': 1,
#     'Fruits': 0,
#     'Veggies': 1,
#     'HvyAlcoholConsump': 0,
#     'AnyHealthcare': 1,
#     'NoDocbcCost': 1,
#     'GenHlth': 2,
#     'MentHlth': 20,
#     'PhysHlth': 5,
#     'DiffWalk': 0,
#     'Sex': 0,
#     'Age': 9,
# }

# patient_data2 = {
#     'HighBP': 1,
#     'HighChol': 1,
#     'CholCheck': 1,
#     'BMI': 35,
#     'Smoker': 1,
#     'Stroke': 0,
#     'Diabetes': 2,
#     'PhysActivity': 0,
#     'Fruits': 0,
#     'Veggies': 1,
#     'HvyAlcoholConsump': 0,
#     'AnyHealthcare': 1,
#     'NoDocbcCost': 0,
#     'GenHlth': 4,
#     'MentHlth': 10,
#     'PhysHlth': 30,
#     'DiffWalk': 1,
#     'Sex': 0,
#     'Age': 10,

# }


# model = joblib.load('D:/Abelrahman/grad_project/ML/HDPrediction/myapp/savedModels/nn_model.joblib')

# prediction = model.predict([list(patient_data.values())])[0]
# prediction2 = model.predict([list(patient_data2.values())])[0]


# if prediction == 1:
#     print("The patient is likely to have heart disease.")
# else:
#     print("The patient is unlikely to have heart disease.")

# if prediction2 == 1:
#     print("The patient is likely to have heart disease.")
# else:
#     print("The patient is unlikely to have heart disease.")


import sklearn
import joblib

print(sklearn.__version__)

model = joblib.load('savedModels/nn_model.joblib')
print(model.__dict__.get("scikit-learn_version", "Unknown"))
import joblib
import numpy as np
from ML.HDPrediction.myapp.models import HeartDisease


def apply_nn_model(data):
    model = joblib.load('D:/Abelrahman/grad_project/ML/HDPrediction/myapp/savedModels/nn_model.joblib')
    X = np.array([[data.HighBP, data.HighChol, data.CholCheck, data.BMI, data.Diabetes, data.PhysActivity,
                   data.Fruits, data.Veggies, data.HvyAlcoholConsump, data.AnyHealthcare, data.NoDocbcCost,
                   data.GenHlth, data.MentHlth, data.PhysHlth, data.DiffWalk,
                   1 if data.Sex == 'M' else 0, data.Age, data.Education, data.Income]])
    result = model.predict(X)[0]
    data.result = result
    data.save()


heart_disease_obj = HeartDisease.objects.get(id=1)
apply_nn_model(heart_disease_obj)


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

from django.urls import path, include
from ML.HDPrediction.myapp.api import (heart_disease_name, heart_disease_create,
                                       HeartDiseaseApi, SubmitForm, heart_disease_list,
                                       heart_disease_detail, TaskList)
from rest_framework.routers import DefaultRouter

app_name = 'myapp'

# router = DefaultRouter()
# router.register('', SubmitForm)

urlpatterns = [
    path('flist/', heart_disease_list, name="heart_disease_list"),
    path('fdetails/<int:pk>', heart_disease_detail, name="heart_disease_detail"),
    # path('submit-form/', include(router.urls)),
    path('submit-form/', SubmitForm.as_view(), name="submit_form"),
    path('fname/<str:name>', heart_disease_name, name="heart_disease_name"),
    path('fcreate/', heart_disease_create, name="heart_disease_create"),
    path('Clist/<int:id>', HeartDiseaseApi.as_view(), name="heart_disease_c_list"),
    path('tasks/', TaskList.as_view()),
]

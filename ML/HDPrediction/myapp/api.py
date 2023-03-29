from django.utils import timezone
from rest_framework import generics
from rest_framework.decorators import api_view
from ML.HDPrediction.myapp.models import Task
from ML.HDPrediction.myapp.serializers import HeartSerializer, TaskSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import joblib
import numpy as np
from ML.HDPrediction.myapp.models import HeartDisease
from django.db.models.signals import post_save
from django.dispatch import receiver


# create a serializer api to get the data from the database
@api_view(['GET'])
def heart_disease_list(request):
    heart_disease_objects = HeartDisease.objects.all()
    serializer = HeartSerializer(heart_disease_objects, many=True)
    permission_classes = (AllowAny,)
    return Response(serializer.data, status=status.HTTP_200_OK)


# @api_view(['POST'])
# @csrf_exempt
# def submit_form(request):
#     if request.method == 'POST':
#         serializer = HeartSerializer(data=request.data)
#         # serializer['submitted_time'] = timezone.now()
#         # serializer['submitted_time'] = timezone.now()
#         authentication_classes = (TokenAuthentication,)
#         permission_classes = (IsAuthenticated,)
#         if serializer.is_valid():
#             serializer.save()
#             response = {'message': 'rating updated', 'result': serializer.data}
#             return Response(response, status=status.HTTP_200_OK)
#         # serializer = ItemSerializer(data=request.data)
#         # serializer.is_valid(raise_exception=True)
#         # serializer.save()
#         # return Response(serializer.data)
#     else:
#         return Response(status=404)


# create a serializer api to get specific data by id

# @api_view(['POST'])
# @csrf_exempt
# def submit_form(request):
#     if request.method == 'POST':
#         serializer = HeartSerializer(data=request.data)
#         authentication_classes = (TokenAuthentication,)
#         permission_classes = (IsAuthenticated,)
#         print(request.method)
#         # print(serializer.is_valid().errors)
#         if serializer.is_valid():
#             serializer.save()
#             response = {'message': 'rating updated', 'result': serializer.data}
#             return Response(response, status=status.HTTP_200_OK)
#     # Return a 405 Method Not Allowed response for non-POST requests
#     else:
#         return Response({'error': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# @csrf_exempt
# class SubmitForm(viewsets.ModelViewSet):
#     queryset = HeartDisease.objects.all()
#     serializer_class = HeartSerializer

# class SubmitForm(generics.ListCreateAPIView):
#     queryset = HeartDisease.objects.all()
#     serializer_class = HeartSerializer

# class SubmitForm(generics.ListCreateAPIView):
#     queryset = HeartDisease.objects.all()
#     serializer_class = HeartSerializer
#
#     # def get_queryset(self):
#     #     queryset = HeartDisease.objects.all()
#     #     for instance in queryset:
#     #         model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#     #         X = np.array(
#     #             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#     #               instance.Stroke,
#     #               instance.Diabetes, instance.PhysActivity,
#     #               instance.Fruits, instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare,
#     #               instance.NoDocbcCost,
#     #               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#     #               1 if instance.Sex == 'M' else 0, instance.Age]])
#     #         result = model.predict(X)[0]
#     #         instance.result = result
#     #         instance.save()
#     #     return queryset
#     def apply_nn_model(sender, instance, created, **kwargs):
#         if created:
#             # your code to load the model and make predictions
#             result = model.predict(X)[0]
#             if instance.result is None:  # check if result field is None
#                 instance.result = result
#                 instance.save()
#     def get_queryset(self):
#         queryset = HeartDisease.objects.all()
#         for instance in queryset:
#             model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#             X = np.array(
#                 [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#                   instance.Stroke,
#                   instance.Diabetes, instance.PhysActivity,
#                   instance.Fruits, instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare,
#                   instance.NoDocbcCost,
#                   instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#                   1 if instance.Sex == 'M' else 0, instance.Age]])
#             predicted_value = model.predict(X)[0]
#             threshold = 0.5
#             result = predicted_value >= threshold
#             instance.result = result
#             instance.save()
#         return queryset


# class SubmitForm(generics.ListCreateAPIView):
#     queryset = HeartDisease.objects.all()
#     serializer_class = HeartSerializer
#
#     # @receiver(post_save, sender=HeartDisease)
#     # def apply_nn_model(sender, instance, created, **kwargs):
#     #     if created:
#     #         # Load the saved model
#     #         model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#     #
#     #         # Prepare the input data
#     #         X = np.array(
#     #             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#     #               instance.Stroke, instance.Diabetes, instance.PhysActivity, instance.Fruits,
#     #               instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare, instance.NoDocbcCost,
#     #               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#     #               1 if instance.Sex == 'M' else 0, instance.Age]])
#     #
#     #         # Make the prediction
#     #         predicted_value = model.predict(X)[0]
#     #         threshold = 0.5
#     #         result = predicted_value >= threshold
#     #
#     #         # Save the predicted result
#     #         instance.result = result
#     #         instance.save()
#
#     @receiver(post_save, sender=HeartDisease)
#     def apply_nn_model(sender, instance, created, **kwargs):
#         if created:
#             # Load the saved model
#             model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#
#             # Prepare the input data
#             X = np.array(
#                 [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#                   instance.Stroke, instance.Diabetes, instance.PhysActivity, instance.Fruits,
#                   instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare, instance.NoDocbcCost,
#                   instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#                   1 if instance.Sex == 'M' else 0, instance.Age]])
#
#             # Make the prediction
#             predicted_value = model.predict(X)[0]
#             threshold = 0.5
#             result = predicted_value >= threshold
#
#             # Set the predicted result
#             instance.result = result
#         else:
#             # Set the default value for result
#             instance.result = False
#
#         instance.save()
#
#     def get_queryset(self):
#         queryset = HeartDisease.objects.all()
#
#         for instance in queryset:
#             # Apply the machine learning model on each instance
#             self.apply_nn_model(instance=instance, created=False)
#
#         return queryset


# class SubmitForm(generics.CreateAPIView):
#     serializer_class = HeartSerializer
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#
#         # Create a new HeartDisease instance with the input data
#         heart_disease = HeartDisease(**serializer.validated_data)
#
#         # Save the instance, which will trigger the apply_nn_model signal handler
#         heart_disease.save()
#
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# def apply_nn_model(instance, created):
#     if created:
#         # Load the saved model
#         model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#
#         # Prepare the input data
#         X = np.array(
#             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#               instance.Stroke, instance.Diabetes, instance.PhysActivity, instance.Fruits,
#               instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare, instance.NoDocbcCost,
#               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#               1 if instance.Sex == 'M' else 0, instance.Age]])
#
#         # Make the prediction
#         predicted_value = model.predict(X)[0]
#         threshold = 0.5
#         result = predicted_value >= threshold
#
#         # Set the predicted result
#         instance.result = result
#     # else:
#     #     # Set the default value for result
#     #     instance.result = False
#
#     instance.save()

# class SubmitForm(generics.CreateAPIView):
#     serializer_class = HeartSerializer
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#
#         # Create a new HeartDisease instance with the input data
#         heart_disease = HeartDisease(**serializer.validated_data)
#
#         # Save the instance, which will trigger the apply_nn_model signal handler
#         heart_disease.save()
#
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
# @receiver(post_save, sender=HeartDisease)
# def apply_nn_model(sender, instance, created, **kwargs):
#     if created:
#         # Load the saved model
#         model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')
#
#         # Prepare the input data
#         X = np.array(
#             [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
#               instance.Stroke, instance.Diabetes, instance.PhysActivity, instance.Fruits,
#               instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare, instance.NoDocbcCost,
#               instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
#               1 if instance.Sex == 'M' else 0, instance.Age]])
#
#         # Make the prediction
#         predicted_value = model.predict(X)[0]
#         threshold = 0.5
#         result = predicted_value >= threshold
#
#         # Set the predicted result
#         instance.result = result
#     # else:
#     #     # Set the default value for result
#     #     # instance.result = False
#
#     instance.save()


# class SubmitForm(generics.CreateAPIView):
#     serializer_class = HeartSerializer
#     # queryset = HeartDisease.objects.none()
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#
#         # Add submitted_time to validated data
#         validated_data = serializer.validated_data
#         validated_data['submitted_time'] = timezone.now()
#
#         # Create a new HeartDisease instance with the input data
#         # heart_disease = HeartDisease(**serializer.validated_data)
#         heart_disease = HeartDisease(**validated_data)
#
#         # Save the instance, which will trigger the apply_nn_model signal handler
#         heart_disease.save()
#
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class SubmitForm(generics.CreateAPIView):
    serializer_class = HeartSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Create a new HeartDisease instance with the input data
        heart_disease = HeartDisease(**serializer.validated_data)

        # Set the submitted_time field explicitly
        heart_disease.submitted_time = timezone.now()

        # Save the instance, which will trigger the apply_nn_model signal handler
        heart_disease.save()

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


@receiver(post_save, sender=HeartDisease)
def apply_nn_model(sender, instance, created, **kwargs):
    if created:
        # Load the saved model
        model = joblib.load('ML/HDPrediction/myapp/savedModels/nn_model.joblib')

        # Prepare the input data
        X = np.array(
            [[instance.HighBP, instance.HighChol, instance.CholCheck, instance.BMI, instance.Smoker,
              instance.Stroke, instance.Diabetes, instance.PhysActivity, instance.Fruits,
              instance.Veggies, instance.HvyAlcoholConsump, instance.AnyHealthcare, instance.NoDocbcCost,
              instance.GenHlth, instance.MentHlth, instance.PhysHlth, instance.DiffWalk,
              1 if instance.Sex == 'M' else 0, instance.Age]])

        # Make the prediction
        predicted_value = model.predict(X)[0]
        threshold = 0.5
        result = predicted_value >= threshold

        # Set the predicted result
        instance.result = result
        instance.save()


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


@api_view(['GET'])
def heart_disease_detail(request, pk):
    try:
        heart_disease_itself = HeartDisease.objects.get(id=pk)
    except HeartDisease.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = HeartSerializer(heart_disease_itself)
    return Response(serializer.data, status=status.HTTP_200_OK)


# create a serializer api to get specific data by first_name
@api_view(['GET'])
def heart_disease_name(request, name):
    try:
        heart_disease_n = HeartDisease.objects.get(first_name=name)
    except HeartDisease.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = HeartSerializer(heart_disease_n)
    return Response(serializer.data, status=status.HTTP_200_OK)


# create a serializer api to create a new row of
@api_view(['POST'])
def heart_disease_create(request):
    serializer = HeartSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# create a serializer class api to update or delete data by id
class HeartDiseaseApi(generics.RetrieveUpdateDestroyAPIView):
    queryset = HeartDisease.objects.all()
    serializer_class = HeartSerializer
    lookup_field = 'id'

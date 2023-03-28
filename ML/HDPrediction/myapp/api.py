from rest_framework import generics
from rest_framework.decorators import api_view
from ML.HDPrediction.myapp.models import HeartDisease
from ML.HDPrediction.myapp.serializers import HeartSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


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

class SubmitForm(viewsets.ModelViewSet):
    queryset = HeartDisease.objects.all()
    serializer_class = HeartSerializer


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

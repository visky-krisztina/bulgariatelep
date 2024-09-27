from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from home_app.models import Item
from home_app.serializer import ItemSerializer
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

@api_view(['GET'])
def getItems(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])  # Optional: Restrict access
def getItem(request, pk):
    try:
        item = Item.objects.get(id=pk)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(item, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        print("Incoming data:", request.data)  # Log the incoming request data

        data = request.data.copy()
        
        # Check if an image is provided in the request files
        if 'image' not in request.FILES and not request.data.get('image'):
            data['image'] = item.image  # Retain the current image if none provided
        elif 'image' in request.FILES:
            data['image'] = request.FILES['image']  # Use new image if uploaded
        
        serializer = ItemSerializer(item, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print("Serializer errors:", serializer.errors)  # Log serializer errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Add MultiPartParser and FormParser to allow file uploads
getItem.parser_classes = [MultiPartParser, FormParser]
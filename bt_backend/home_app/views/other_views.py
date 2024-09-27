from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

from rest_framework.response import Response
from home_app.models import *
from home_app.serializer import *


@api_view(['GET'])
def get_nav_items(request):
    nav_items = NavItem.objects.filter(parent__isnull=True).prefetch_related('sub_items')
    serializer = NavItemSerializer(nav_items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMainSliderData(request):
    mainSliderData = MainSliderData.objects.all()
    serializer = MainSliderSerializer(mainSliderData, many=True)
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])  # Optional: Restrict access
def getMainSlide(request, pk):
    try:
        item = MainSliderData.objects.get(id=pk)
    except MainSliderData.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MainSliderSerializer(item, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        print("Incoming data:", request.data)  # Log the incoming request data
        serializer = MainSliderSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print("Serializer errors:", serializer.errors)  # Log serializer errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET'])
def get_hero(request):
    item = Hero.objects.all()
    serializer = HeroSerializer(item, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_preacher(request):
    preacher = Preacher.objects.all()
    serializer = PreacherSerializer(preacher, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_sermons(request):
    sermons = Sermon.objects.all()
    serializer = SermonSerializer(sermons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_dailyVerses(request):
    dailyVerses = DailyVerses.objects.all()
    serializer = DailyVersesSerializer(dailyVerses, many=True)
    return Response(serializer.data)
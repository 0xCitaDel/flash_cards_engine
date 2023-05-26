from rest_framework import generics

from .serializers import (ExpressionsSerializer, LessonsSerializer,
                          PlaylistsSerializer)

from .models import Expressions, Themes, ColorOfPlaylist


class ExpressionsListView(generics.ListCreateAPIView):

    serializer_class = ExpressionsSerializer
    queryset = Expressions.objects.all()

    def get_queryset(self):
        color = self.kwargs['color']
        lesson = self.kwargs['lesson_id']
        return self.queryset.filter(reference_description__playlist_color__slug=color)\
            .filter(reference_description__lesson_number=lesson)

class ExpressionDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = ExpressionsSerializer
    queryset = Expressions.objects.all()


class LessonsListView(generics.ListCreateAPIView):

    serializer_class = LessonsSerializer
    queryset = Themes.objects.all()

    def get_queryset(self):
        color = self.kwargs['color']
        return self.queryset.filter(playlist_color__slug=color) 


class PlaylistsListView(generics.ListCreateAPIView):

    serializer_class = PlaylistsSerializer
    queryset =  ColorOfPlaylist.objects.all()

from rest_framework import generics

from .serializers import ExpressionsSerializer
from .models import Expressions

class ExpressionsListView(generics.ListAPIView):

    serializer_class = ExpressionsSerializer
    queryset = Expressions.objects.all()

    def get_queryset(self):
        color = self.kwargs['color']
        lesson = self.kwargs['lesson']
        return self.queryset.filter(reference_description__playlist_color__slug=color)\
            .filter(reference_description__lesson_number=lesson)

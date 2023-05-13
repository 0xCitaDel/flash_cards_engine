from rest_framework import generics

from .serializers import ExpressionsSerializer
from .models import Expressions

class ExpressionsListView(generics.ListCreateAPIView):

    serializer_class = ExpressionsSerializer
    queryset = Expressions.objects.all()

    def get_queryset(self):
        color = self.kwargs['color']
        lesson = self.kwargs['lesson']
        return self.queryset.filter(reference_description__playlist_color__slug=color)\
            .filter(reference_description__lesson_number=lesson)

class ExpressionDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = ExpressionsSerializer
    queryset = Expressions.objects.all()


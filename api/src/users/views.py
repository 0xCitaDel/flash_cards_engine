from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer 

from .models import UserProfile 


class UsersListView(generics.ListCreateAPIView):

    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()
    permission_classes = (IsAuthenticated, )

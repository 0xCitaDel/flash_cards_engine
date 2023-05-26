from django.urls import path

from .views import (ExpressionsListView, ExpressionDetailView, 
                    LessonsListView,  PlaylistsListView)

urlpatterns = [
    path('card/<int:pk>', ExpressionDetailView.as_view()),
    path('playlists/<slug:color>/<int:lesson_id>/', ExpressionsListView.as_view()),
    path('playlists/<slug:color>/', LessonsListView.as_view()),
    path('playlists/', PlaylistsListView.as_view()),
]


from django.urls import path

from .views import ExpressionsListView

urlpatterns = [
    path('cards/<slug:color>/<int:lesson>', ExpressionsListView.as_view())
]

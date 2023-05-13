from django.urls import path

from .views import ExpressionsListView, ExpressionDetailView

urlpatterns = [
    path('cards/<slug:color>/lesson-<int:lesson>', ExpressionsListView.as_view()),
    path('card/<int:pk>', ExpressionDetailView.as_view())
]

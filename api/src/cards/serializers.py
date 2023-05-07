from rest_framework import serializers

from .models import Expressions


class ExpressionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expressions
        fields = ('id', 'en_expression', 'ru_expression')
        read_only_fields = ('id', )

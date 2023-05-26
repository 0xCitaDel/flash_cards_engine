from rest_framework import serializers

from .models import Expressions, Themes, ColorOfPlaylist


class ExpressionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expressions
        fields = ('id', 'en_expression', 'ru_expression', 'reference_description')

class LessonsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Themes
        fields = '__all__'


class PlaylistsSerializer(serializers.ModelSerializer):

    class Meta:
        model =  ColorOfPlaylist
        fields = '__all__'

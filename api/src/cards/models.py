from django.db import models
from core.settings import AUTH_USER_MODEL


class Expressions(models.Model):

    en_expression = models.CharField(
        verbose_name='EN side',
        max_length=2048
    )
    ru_expression = models.CharField(
        verbose_name='RU side',
        max_length=2048
    )
    reference_description = models.ForeignKey(
        verbose_name='Info about card',
        to='DescriptionOfExpressions',
        on_delete=models.PROTECT
    )

    class Meta:
        db_table = 'expressions'
        verbose_name = 'Expression'
        verbose_name_plural = 'Expressions'

    def __str__(self):
        return f'{self.en_expression}'


class DescriptionOfExpressions(models.Model):

    tense = models.ForeignKey(
        verbose_name='Tense name',
        to='TenseName',
        on_delete=models.PROTECT
    )
    title = models.CharField(
        verbose_name='Name of lesson',
        max_length=1024
    )
    playlist_color = models.ForeignKey(
        verbose_name='Color of playlist',
        to='ColorOfPlaylist',
        on_delete=models.PROTECT
    )
    lesson_number = models.PositiveSmallIntegerField(
        verbose_name='Number of lesson'
    )
    video_number = models.PositiveSmallIntegerField(
        verbose_name='Number of video in playlist'
    )

    class Meta:
        db_table = 'expressions_description'
        verbose_name = 'Description of expression'
        verbose_name_plural = 'Description of expressions'

    def __str__(self):
        return f'{self.lesson_number} - {self.title}'


class TenseName(models.Model):

    tense_name = models.CharField(
        verbose_name='Name of tense',
        max_length=128
    )
    slug = models.SlugField(max_length=16)

    class Meta:
        db_table = 'expression_tense_name'
        verbose_name = 'Tense name'
        verbose_name_plural = 'Tense names'

    def __str__(self):
        return f'{self.tense_name}'


class ColorOfPlaylist(models.Model):

    playlist_color = models.CharField(
        verbose_name='Name of color of playlist',
        max_length=128
    )
    slug = models.SlugField(max_length=16)

    class Meta:
        db_table = 'expressions_color_playlist'
        verbose_name = 'Playlist color'
        verbose_name_plural = 'Playlist colors'

    def __str__(self):
        return f'{self.playlist_color}'


class RepeatExpression(models.Model):

    """
    This class includes expressions that will need to be
    repeated to the user
    """

    reference_expression = models.ForeignKey(
        verbose_name='Expression from expressions table',
        to='Expressions',
        on_delete=models.CASCADE
    )
    reference_user = models.ForeignKey(
        verbose_name='User from users app',
        to=AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    class Meta:
        db_table = 'expressions_repeat'
        verbose_name = 'Repeat expression'
        verbose_name_plural = 'Repeat expressions'

    def __str__(self):
        return f'{self.reference_user} - {self.reference_expression}'


class RepeatSpellingExpression(models.Model):

    """
    This class includes expressions with spelling mistakes that will need to be
    repeated to the user
    """

    reference_expression = models.ForeignKey(
        verbose_name='Expression from expressions table',
        to='Expressions',
        on_delete=models.CASCADE
    )
    reference_user = models.ForeignKey(
        verbose_name='User from users app',
        to=AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    class Meta:
        db_table = 'expressions_repeat_spelling'
        verbose_name = 'Repat spelling expression'
        verbose_name_plural = 'Repat spelling expressions'

    def __str__(self):
        return f'{self.reference_user} - {self.reference_expression}'

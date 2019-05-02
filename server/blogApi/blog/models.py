from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericRelation
from mdeditor.fields import MDTextField

from read_statistics.models import ReadDetail, ReadNumExpandMethod


class BlogType(models.Model):
    type_name = models.CharField(max_length=15)

    def __str__(self):
        return self.type_name


class Tag(models.Model):
    name = models.CharField('标签名', max_length=20)
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    last_modified_time = models.DateTimeField('修改时间', auto_now=True)

    def __str__(self):
        return self.name


class Blog(models.Model, ReadNumExpandMethod):
    title = models.CharField(max_length=50, verbose_name=u'标题')
    blog_type = models.ForeignKey(BlogType, on_delete=models.DO_NOTHING, verbose_name=u'博客类型')
    content = MDTextField()
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name=u'作者')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    read_details = GenericRelation(ReadDetail)
    tags = models.ManyToManyField('Tag', verbose_name='标签', blank=True)
    overview = models.CharField(max_length=200, default='')

    class Meta:
        verbose_name = u"博客"
        verbose_name_plural = verbose_name
        ordering = ['-created_time']
        # app_label = 'blog'

    def __str__(self):
        return self.title

    def tags_list(self):
        return ','.join(i.name for i in self.tags.all())

    def format_create_time(self):
        return self.created_time.strftime("%Y-%m-%d")



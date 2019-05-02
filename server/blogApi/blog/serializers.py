from rest_framework import serializers

from blog.models import *


class BlogSerializer(serializers.ModelSerializer):
    created_time = serializers.DateTimeField(format="%Y-%m-%d")
    read_num = serializers.SerializerMethodField()

    def get_read_num(self, obj):
        return obj.get_read_num()

    class Meta:
        model = Blog

        fields = ('url', 'title', 'content', 'created_time', 'blog_type', 'tags', 'id', 'read_num')
        depth = 1


class BlogTypeSerializer(serializers.ModelSerializer):
    blog_set = BlogSerializer(many=True)

    class Meta:
        model = BlogType
        fields = ('id', 'type_name', 'blog_set')


class TagSerializer(serializers.ModelSerializer):
    blog_set = BlogSerializer(many=True)

    class Meta:
        model = Tag

        fields = ('id', 'name', 'blog_set')


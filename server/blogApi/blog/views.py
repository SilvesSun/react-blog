from django.contrib.auth.models import User, Group
from django.contrib.postgres.search import SearchVector
from django.contrib.sitemaps import Sitemap
from django.db.models import Sum, Count

from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from blog.models import Blog, Tag, BlogType
from blog.serializers import BlogSerializer, TagSerializer, BlogTypeSerializer
from read_statistics.models import ReadNum, ReadDetail
from read_statistics.utils import read_statistics_once_read

from util.pagination import CustomPagination

from collections import defaultdict, OrderedDict


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-id')
    serializer_class = BlogSerializer

    def retrieve(self, request, **kwargs):
        blog = self.get_object()
        read_statistics_once_read(request, blog)
        serializer = self.get_serializer(blog)
        response = Response(serializer.data)
        return response

    @list_route()
    def recommend(self, request):
        blog_count = Blog.objects.count()
        blogs = Blog.objects.order_by('?')[:3]
        read_total = ReadNum.objects.aggregate(read_total=Sum('read_num'))
        # most_read = ReadNum.objects.all().order_by('-read_num')[:3]
        read_dic = [{'id': obj.id, 'title': obj.title,
                     'read_num': obj.get_read_num(),
                     'created_time': obj.format_create_time()}
                    for obj in blogs]
        context = {'blog_count': blog_count,
                   'read_total': read_total.get('read_total'),
                   'most_read': read_dic
                   }

        return JsonResponse(context)

    @list_route()
    def archive(self, request):
        blog_dates = Blog.objects.dates('created_time', 'month', order='DESC')
        dates = [(d.year, d.month) for d in blog_dates]
        dates_dic = defaultdict(list)
        iter_dic = lambda: defaultdict(iter_dic)
        blog_dic = iter_dic()
        for d in dates: dates_dic[str(d[0])].append(d[1])

        for (year, months) in dates_dic.items():
            for month in months:
                blog_values = Blog.objects.filter(created_time__year=int(year),
                                                  created_time__month=month).values('id', 'title', 'created_time') \
                    .order_by('-created_time')
                blog_dic[year][str(month)] = list(blog_values)

        return JsonResponse(blog_dic)

    @list_route()
    def search(self, request):
        search_text = request.GET.get('q')
        raw_sql = f"select * from blog_blog where match(title, content) AGAINST ('{search_text}' IN BOOLEAN MODE)"
        blogs = Blog.objects.raw(raw_sql)
        if not search_text:
            blogs = []

        paginator = CustomPagination()
        page = paginator.paginate_queryset(list(blogs), request)
        serializer = BlogSerializer(page, many=True, context={'request': request})
        data = serializer.data
        return Response({
            'links': {
                'next': paginator.get_next_link(),
                'previous': paginator.get_previous_link()
            },
            'count': paginator.page.paginator.count,
            'results': data,
            'page_size': paginator.page_size,
            'current_page': paginator.page.number,
            'search_text': search_text,
        })


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('-id')
    serializer_class = TagSerializer

    @list_route()
    def summary(self, request):
        blog_tags_list = Tag.objects.annotate(blog_count=Count('blog'))
        context = {
            'tag_summary': [{'tag_id': obj.id, 'name': obj.name, 'count': obj.blog_count} for obj in blog_tags_list]
        }

        return JsonResponse(context)

    @detail_route(methods=['get'])
    def tag_blog(self, request, pk):
        tag = get_object_or_404(Tag, pk=pk)
        blogs_all_list = tag.blog_set.all()
        paginator = CustomPagination()
        page = paginator.paginate_queryset(blogs_all_list, request)
        serializer = BlogSerializer(page, many=True, context={'request': request})
        data = serializer.data

        return Response({
            'links': {
                'next': paginator.get_next_link(),
                'previous': paginator.get_previous_link()
            },
            'count': paginator.page.paginator.count,
            'results': data,
            'page_size': paginator.page_size,
            'current_page': paginator.page.number,
            'id': pk,
            'tag_name': tag.name
        })


class TypeViewSet(viewsets.ModelViewSet):
    queryset = BlogType.objects.all().order_by('-id')
    serializer_class = BlogTypeSerializer

    @list_route()
    def summary(self, request):
        blog_tags_list = BlogType.objects.annotate(blog_count=Count('blog'))
        context = {
            'type_summary': [{'tag_id': obj.id, 'name': obj.type_name, 'count': obj.blog_count} for obj in
                             blog_tags_list],
            'blog_count': sum([obj.blog_count for obj in blog_tags_list])
        }

        return JsonResponse(context)

    @detail_route(methods=['get'])
    def type_blog(self, request, pk):
        blog_type = get_object_or_404(BlogType, pk=pk)
        blogs_all_list = Blog.objects.filter(blog_type=blog_type).all()
        paginator = CustomPagination()
        page = paginator.paginate_queryset(blogs_all_list, request)
        serializer = BlogSerializer(page, many=True, context={'request': request})
        data = serializer.data

        return Response({
            'links': {
                'next': paginator.get_next_link(),
                'previous': paginator.get_previous_link()
            },
            'count': paginator.page.paginator.count,
            'results': data,
            'page_size': paginator.page_size,
            'current_page': paginator.page.number,
            'id': pk,
            'type_name': blog_type.type_name
        })


class BlogSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.5

    def items(self):
        return Blog.objects.all()

    def lastmod(self, obj):
        return obj.updated_time

    def location(self, obj):
        return '/blog/%s' % obj.id

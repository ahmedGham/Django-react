from django.contrib.auth.models import User
from django.utils import timezone
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(
        max_length=10, choices=options, default='published')
    slug = models.SlugField(max_length=250, unique_for_date='published')
    objects = models.Manager()
    postobjects = PostObjects()


    def __str__(self) -> str:
        return self.title

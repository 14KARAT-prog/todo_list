from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response


from .models import Project, TODO
from .serializers import ProjectModelSerializer, TODOModelSerializer

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        project = Project.objects.all()
        if name:
            project = project.filter(name__contains=name)
        return project

class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def perform_destroy(self, instance):
        instance.active = False
        instance.save()



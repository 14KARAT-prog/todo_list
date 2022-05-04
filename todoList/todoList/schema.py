
import graphene
from graphene_django import DjangoObjectType
from TODO.models import Project, TODO
from users.models import User

class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class Query(graphene.ObjectType):
    all_project = graphene.List(ProjectType)
    all_todo = graphene.List(TODOType)

    def resolve_all_project(root, info):
        return Project.objects.all()
    
    def resolve_all_todo(root, info):
        return TODO.objects.all()

schema = graphene.Schema(query=Query)
import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate,APIClient, APISimpleTestCase, APITestCase
#from mixer.backend.django import mixer
from users.models import User
from .views import ProjectModelViewSet, TODOModelViewSet
from .models import Project,TODO


class TestProjectViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get' : 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_quest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/projects/', {'name' : 'netshop',
        'url': 'https://gitlab.com/14KARAT-prog/plant_shop/-/tree/master/',
        'users': '1'}, format='json')
        view = ProjectModelViewSet.as_view({'post' : 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail(self):
        project = Project.objects.create(name='netshop',
        url='https://gitlab.com/14KARAT-prog/plant_shop/-/tree/master/',
        users=1)
        client = APIClient()
        response = client.get(f'/api/projects/{project.id}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        project = Project.objects.create(name='netshop',
        url='https://gitlab.com/14KARAT-prog/plant_shop/-/tree/master/',
        users=1)
        client = APIClient()
        response = client.put(f'/api/projects/{project.id}', {'name' : 'netshop',
        'url': 'https://gitlab.com/14KARAT-prog/plant_shop/-/tree/master/',
        'users': '1'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
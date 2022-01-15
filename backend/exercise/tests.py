from django.test import TestCase
from django.urls.base import resolve
from django.urls import include, path
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase, URLPatternsTestCase
from rest_framework import status


class ExerciseTestCase(APITestCase, URLPatternsTestCase):

    urlpatterns = [
        path('api/', include('exercise.urls')),
    ]

    def setUp(self):
        self.url_exercise_list = reverse('exercise:exercise-list')

    def test_exercise_GET(self):
        """GET METHOD"""

        response = self.client.get(
            self.url_exercise_list,
            format='json'
        )
        self.assertEquals(response.status_code, status.HTTP_200_OK)



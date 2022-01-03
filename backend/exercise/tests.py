from django.test import TestCase
from django.urls.base import resolve
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase
from rest_framework import status

# Create your tests here.
class ExerciseTestCase(APITestCase):
    def setUp(self):
        self.url_exercise_list = reverse('exercise:exercise-list')

    def test_get_exercise(self):
        """GET method"""
        response = self.client.get(
            self.url_exercise_list, 
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

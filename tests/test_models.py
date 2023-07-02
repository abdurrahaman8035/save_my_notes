from django.test import TestCase
from django.contrib.auth.models import User
from notes.models import Topic, Entry
from django.shortcuts import reverse


class TopicModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.topic = Topic.objects.create(text='Test Topic', owner=self.user)

    def test_topic_str_representation(self):
        self.assertEqual(str(self.topic), 'Test Topic')

    def test_topic_absolute_url(self):
        expected_url = reverse('notes:topic', args=[self.topic.id])
        self.assertEqual(self.topic.get_absolute_url(), expected_url)


class EntryModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.topic = Topic.objects.create(text='Test Topic', owner=self.user)
        self.entry = Entry.objects.create(topic=self.topic, text='Test Entry')

    def test_entry_str_representation(self):
        expected_str = 'Test Entry'.capitalize()
        self.assertEqual(str(self.entry), expected_str)

    def test_entry_absolute_url(self):
        expected_url = reverse('notes:topic', args=[self.topic.id])
        self.assertEqual(self.entry.get_absolute_url(), expected_url)

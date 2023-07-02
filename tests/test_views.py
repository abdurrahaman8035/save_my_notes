from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from notes.models import Topic, Entry


class ViewsTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.client.login(username="testuser", password="testpass")
        self.topic = Topic.objects.create(text="Test Topic", owner=self.user)
        self.entry = Entry.objects.create(topic=self.topic, text="Test Entry")

    def test_index_view(self):
        response = self.client.get(reverse("notes:index"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "index.html")

    def test_topics_view(self):
        response = self.client.get(reverse("notes:topics"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "topics.html")

    def test_topic_view(self):
        response = self.client.get(reverse("notes:topic", args=[self.topic.id]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "topic.html")

    def test_new_topic_view(self):
        response = self.client.get(reverse("notes:new_topic"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "new_topic.html")

        response = self.client.post(
            reverse("notes:new_topic"), {"text": "New Test Topic"}
        )
        self.assertEqual(response.status_code, 302)  # Should redirect to topics view

    def test_new_entry_view(self):
        response = self.client.get(reverse("notes:new_entry", args=[self.topic.id]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "new_entry.html")

        response = self.client.post(
            reverse("notes:new_entry", args=[self.topic.id]), {"text": "New Test Entry"}
        )
        self.assertEqual(response.status_code, 302)  # Should redirect to topic view

    def test_edit_entry_view(self):
        response = self.client.get(reverse("notes:edit_entry", args=[self.entry.id]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "edit_entry.html")

        response = self.client.post(
            reverse("notes:edit_entry", args=[self.entry.id]),
            {"text": "Updated Test Entry"},
        )
        self.assertEqual(response.status_code, 302)  # Should redirect to topic view

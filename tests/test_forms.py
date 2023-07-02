from django.test import TestCase
from notes.forms import TopicForm, EntryForm

class FormsTest(TestCase):
    def test_topic_form(self):
        form = TopicForm(data={'text': 'Test Topic'})
        self.assertTrue(form.is_valid())

    def test_entry_form(self):
        form = EntryForm(data={'text': 'Test Entry'})
        self.assertTrue(form.is_valid())

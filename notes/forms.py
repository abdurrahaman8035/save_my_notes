from django import forms
from .models import Topic, Entry


class TopicForm(forms.ModelForm):
   """A simple to accept topic name"""
   class Meta:
      model = Topic
      fields = ["text"]
      labels = {"text": ""}


class EntryForm(forms.ModelForm):
   """A simple form to accept topic entry"""
   class Meta:
      model = Entry  # specify the model of the form structure
      fields = ["text"]
      labels = {"text": "Entry:"}
      widgets = {"text": forms.Textarea(attrs={"cols": 80})}

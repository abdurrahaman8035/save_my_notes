from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404
from .models import Topic, Entry
from .forms import TopicForm, EntryForm
from django.contrib.auth.decorators import login_required


def index(request):
    """Display the home page"""
    return render(request, "index.html")


@login_required
def topics(request):
    """the page to display all topics"""
    topics = Topic.objects.filter(owner=request.user).order_by("date_added")
    context = {"topics": topics}
    return render(request, "topics.html", context)


@login_required
def topic(request, topic_id):
    """Show a single topic and all its entries"""
    topic = Topic.objects.get(id=topic_id)
    # make sure the topic belongs to the current user
    if topic.owner != request.user:
        raise Http404
    entries = topic.entry_set.order_by("-date_added")
    context = {"topic": topic, "entries": entries}
    return render(request, "topic.html", context)


@login_required
def new_topic(request):
    """Add a new topic"""
    if request.method != "POST":
        # No data submitted; create a blank form
        form = TopicForm()
    else:
        # POST data submitted; process data
        form = TopicForm(data=request.POST)
        # check submitted data validity
        if form.is_valid():
            # write data to our database
            new_topic = form.save(commit=False)
            new_topic.owner = request.user
            new_topic.save()
            form.save()
            # redirect back to topics page after saving the new topic added
            return redirect("notes:topics")

    # Display a blank or invalid form
    context = {"form": form}
    return render(request, "new_topic.html", context)


@login_required
def new_entry(request, topic_id):
    """Add a new entry for a particular topic"""
    topic = Topic.objects.get(id=topic_id)
    if request.method != "POST":
        # No data submitted; create a blank form
        form = EntryForm()
    else:
        # POST data submitted; process data
        form = EntryForm(data=request.POST)
        # check submitted data validity
        if form.is_valid():
            # write data to our database
            new_entry = form.save(commit=False)
            new_entry.topic = topic
            new_entry.save()
            # redirect back to topics page after saving the new topic added
            return redirect("notes:topic", topic_id=topic_id)
    # Display a blank or invalid form
    context = {"topic": topic, "form": form}
    return render(request, "new_entry.html", context)


@login_required
def edit_entry(request, entry_id):
    """Edit an existing entry"""
    entry = Entry.objects.get(id=entry_id)
    topic = entry.topic
    if topic.owner != request.user:
        raise Http404
    if request.method != "POST":
        # initial request; pre-fill form with the current entry.
        form = EntryForm(instance=entry)
    else:
        # POST data submitted; process data
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid:
            form.save()
            return redirect("notes:topic", topic_id=topic.id)

    context = {"entry": entry, "topic": topic, "form": form}
    return render(request, "edit_entry.html", context)

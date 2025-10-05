from django.shortcuts import render, get_object_or_404
from .models import Announcement

def home(request):
    latest_announcements = Announcement.objects.all()[:3]
    return render(request, 'announcements/home.html', {
        'latest_announcements': latest_announcements
    })

def announcement_list(request):
    announcements = Announcement.objects.all()
    return render(request, 'announcements/announcement_list.html', {
        'announcements': announcements
    })

def announcement_detail(request, id):
    announcement = get_object_or_404(Announcement, id=id)
    return render(request, 'announcements/announcement_detail.html', {
        'announcement': announcement
    })
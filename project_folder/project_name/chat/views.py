from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Message
from django.contrib.auth.models import User

@login_required
def chat_view(request):
    users = User.objects.exclude(username=request.user.username)
    return render(request, 'chat/chat.html', {'users': users})
"""
URL configuration for boppop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('api/', include([
        path('admin/', admin.site.urls),
        path('challenge', get_challenge),
        path('submission', get_submission),
        path('songs/', song_list),
        path('songs/<int:id>', song_detail),
        path('artists/', artist_list),
        path('artists/<int:id>', artist_detail),
        path('playlists/', playlist_list),
        path('playlists/<int:id>', playlist_detail),
        path('playlists/current', current_playlist),
        path('login/', login_user),
        path('logout/', logout_user),
        path('register/', register_user),
        path('user/info', get_user_info),
    ])),
]
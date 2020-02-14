---
categories:
- Python
comments: true
date: "2018-12-08T05:00:00Z"
tags:
- python
- django
- nginx
title: Deploying Django Application with Nginx and uwsgi
toc:
- true
updated: "2018-11-06 05:00:00"
url: /:categories/:title/
---

# Introduction
In this post we will learn about deploying Django applications. There are many ways to deploy a Django application. we can use either nginx or apache web server. Nginx is just a web server. It doesn't know how to run Python programs. For this, we need a server which understands how to run python programs. This server is called application server. To run a application server, we can use uwsgi, gunicorn and etc. For hosting the application we can use standalone servers or cloud computing like Heroku.

This tutorial assumes you have Ubuntu server or any other Linux based system.

In this tutorial we are going to use 
 - Ubuntu hosting, 
 - nginx server, 
 - uwsgi app server 
 - postgresql for database

# Django Project
 For deploying our application, I have a very minimal twitter like project which is available in github. [https://github.com/thavan/minitwit](https://github.com/thavan/minitwit). Let's checkout this repository later on when deploying.

# Setting up Nginx
To start our deployment, let's first install nginx.

```bash
sudo apt-get install nginx
```

Let's create a nginx configuration for our minitwit site. Create a new file /etc/nginx/conf.d/minitwit.conf and update it with following content.

```bash
upstream minitwit {
    server 127.0.0.1:6789; # forward all requests to this django app server.
}

server {
        listen 80;
        listen [::]:80;
        root /var/www;
        index index.html index.htm index.nginx-debian.html;
        server_name minitwit.thavanathan.com; # replace your server name here.

	location /static/ {
    		autoindex on;
    		alias  /var/www/minitwit/staticfiles/;
  	}

	location /media/ {
		autoindex on;
		alias /var/www/minitwit/media/;
	}
        
	location / {
		include uwsgi_params;
        	uwsgi_pass minitwit;
    }
}
```

There are three location directive in the config. /static/ and /media/ are for serving static files. / is to be handled by django, so we pass it to upstream url called minitwit, which our django app server running with uwsgi.


# Setting up uwsgi
Django runs on a application server. wsgi can be installed via pip

```bash
pip install uwsgi
```

# Setting up Postgres
Install postgres using,
```bash
sudo apt-get install postgresql postgresql-contrib
```
and then start it using
```bash
sudo service postgresql start
```

As this is our first deployment, we will create a new user and a new database. postgresql comes with new default account called postgres. We will login to that account to use it.

```bash
sudo -i -u postgres
psql # opens up postgresql prompt where you can execute queries

```

In the psql prompt do the following to create database and user.

```sql
create database testdb;
create user testuser with encrypted password 'testpass';
grant all privileges on database testdb to testuser;
```

Now try to connect as testuser
```bash
psql -U testuser testdb
```

If the above line works, we are good to go.

# Checking out code and Starting application server

First, let's checkout the code from git in our server
```bash
cd /var/www/
git clone https://github.com/thavan/minitwit.git minitwit
cd minitwit
```

If you take a look at /var/www/minitwit directory, you will see a file called muwsgi.ini. This is the configuration file for uwsgi server.

```bash
[uwsgi]
plugin = python3
socket = 127.0.0.1:6789
wsgi-file = minitwit/wsgi.py # django's wsgi file
callable = application
processes = 2
threads = 2
stats = 127.0.0.1:5678
virtualenv = /home/thavan/.virtualenvs/minitwit # virtual environment path
daemonize = /var/log/minitwit/uwsgi.log
```

We need a python virtual environment to deploy our code. Run the following commands to install virtualenv package.

```bash
pip install virtualenv
pip install virtualenv-wrapper
```

Add below three lines to your ~/.bashrc files.
```bash
export VIRTUALENVWRAPPER_PYTHON=python3
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

Now create a virtual environment.
```bash
mkvirtualenv minitwit
workon minitwit # This will activate the virtual environment
```
Let's install all third party packages.

```bash
pip install -r requirements.txt
```

Before starting the django app server, if you take a look at django's settings.py, you will notice following lines.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['MINITWIT_DBNAME'],
        'USER': os.environ['MINITWIT_DBUSER'],
        'PASSWORD': os.environ['MINITWIT_DBPASSWORD'],
        'PORT': os.environ['MINITWIT_DBPORT'],
    }
}
```
This is Django's database configuration. Instead of giving db username and password, we are taking it from environment variables. So we have to set these environment variables in order to Django pickup db user name and password.

Take a look at prodenv.sh. Let's modify it to update username and password details.

```bash
export MINITWIT_DBNAME=testdb
export MINITWIT_DBUSER=testuser
export MINITWIT_DBPASSWORD=testpass
export MINITWIT_DBPORT=5432
```

That's it. Now let's set these environment variables.

```bash
source prodenv.sh # sets all environment variables.
```

Start uwsgi server
```bash
uwsgi muwsgi.ini
```
collect static files and migrate database
```bash
python manage.py collectstatic
python manage.py migrate
python manage.py createsuperuser # create super user if there is no user in the system.
```

Restart nginx

```bash
sudo service nginx restart
```

Make sure in your DNS provider's console, you created CNAME record for your sub-domain (like minitwit.thavanathan.com) to point to your server's IP.

Congratulations! You have deployed your first Django application.

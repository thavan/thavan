Title: mod_python to mod_wsgi
Date: 2012-01-28 11:08:00
Modified: 2012-02-21 10:07
Category: Python
Tags: mod-python, mod-wsgi
Slug: mod-python-to-mod-wsgi
Authors: Thavan
Summary: Configuring mod-python settings to mod-wsgi

Recently we have moved server from mod_python to mod_wsgi. Mod_python is not under active development. Official Apache website says that, 

>currently mod_python is not under active development. This does not mean that it is "dead" as some people have claimed. It simply means that the code and the project are mature enough when very little is required to maintain it. 

Here, I have explained mod_python and and mod_wsgi configuration for same project, so that it will be helpful to someone who is migrating from mod_python to mod_wsgi module. 

Apache virtual host configuration with mod_python 

	:::apache
	<virtualhost *:80>  
	     ServerAdmin root@localhost  
	     DocumentRoot /public/media/thava.org/  
	     ServerName thava.org  
	     ServerAlias thava.org  
	     ErrorLog logs/thava.org-error_log  
	     CustomLog logs/thava.org-access_log combined  
	     <location>  
		 SetEnv SERVER_ENV Development  
		 SetHandler python-program  
		 PythonHandler django.core.handlers.modpython  
		 PythonPath "['/public/projects/thava.org/trunk/src/',  '/usr/local/gdp/lib/python2.4/site-packages/'] + sys.path" 
		 SetEnv PYTHON_EGG_CACHE /home/thava/.python-eggs  
		 SetEnv DJANGO_SETTINGS_MODULE thavaorg.settings  
		 PythonDebug On  
	     </location>  
	     <Location "/images">  
		 SetHandler None  
	     </Location>  
	</virtualhost>

Same config in mod_wsgi:

	:::apache	
	<virtualhost *:80>  
	    ServerName thava.org  
	    ServerAlias thava.org  
	    ServerAdmin root@thava.org  
	    DocumentRoot /public/media/thava.org  
	    Alias /images/ /public/media/thava.org/images/  
	    SetEnv SERVER_ENV Development  
	    WSGIScriptAlias / /public/projects/thava.org/trunk/src/thavaorg.wsgi  
	    Allow from all   
	</virtualhost>  

Thats it. thavaorg.wsgi is the file where we configure our django project. thavaorg.wsgi should be like this.

	:::python
	import os, sys  
	sys.path.append('/public/projects/thava.me/trunk/src/')  
	sys.path.append('/usr/local/gdp/lib/python2.4/site-packages/')  
	  
	os.environ['DJANGO_SETTINGS_MODULE'] = 'thavame.settings'  
	os.environ['SERVER_ENV'] = 'Development'  
	    
	import django.core.handlers.wsgi  
	application = django.core.handlers.wsgi.WSGIHandler()

This is a very simple configuration. More advanced configuration and installation procedure of mod_wsgi can be found [here][modwsgi_link]

[modwsgi_link]: http://code.google.com/p/modwsgi/

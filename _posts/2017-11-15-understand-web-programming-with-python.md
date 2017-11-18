---
title: Understanding web programming with Python 1
date: 2017-11-14 05:00:00
permalink: /:categories/:title/
categories:
  - Python
tags:
  - python
  - cgi
  - apache
---

Web programming or web development is an art of developing web sites. It's a broader term. There are numerous number of web frameworks out there to easily getting start with. But, it's essential to understand the basics before diving into any one of those frameworks. Through these series of posts, we are going study fundamentals of web programming and explore advanced concepts and frameworks later. I use python here because I seems to be knowing it and I prefer it more than other languages when it comes to teaching.

Let's start with a web server. Web server is a computer program that simply delivers web pages. For example when you type [www.example.com](http://www.example.com) in your browser, a web server is what gives you that page. Web pages can be already stored in the server or can be generated dynamically. For example if you request this blog post, it's very simple html page that is store on the server. server program just needs to fetch and return it to your browser. 

But unfortunately this is not enough mechanism for facebook to work. Let's say you request a page in facebook [http://www.facebook.com/friends/](). When you request, Facebook needs check if you are logged in and need get all of your friends from a database and create a page with all these information and send it back to you. This is called dynamic web pages.

When it comes to dynamic web pages, a web server cannot do all the above mentioned tasks. Web server's servers job is to essentially handle incoming requests very effectively, and return the response. but building a dynamic web page is not it's task. Basically a programming languages is well suited for this task. That is where application servers comes into play.

Application servers on the other hand, are designed to process your requests with specific programming language. For example a Tomcat server is a Java application server. uwsgi is a Python application application server. These application servers understand languages like Python or Java.

Now we have three main components,

    1. Web server: only serves pages - forwards requests to application server
    2. Application server. - process requests and generates response.
    3. A programming language. - used by application server.

Enough theory, let's write some code to understand these concepts.

### CGI ###
Let's say we received a web request, and we want to process that request with python. In this case, we are going to use Apache web server. CGI is called common gateway interface. CGI is basically a script that is run by the web server whenever a request is received. The script can be a python script or a shell script or ruby script. Let's create a cgi script to process our request.


```python
# !/usr/bin/env python3

print("Content-Type: text/plain;charset=utf-8\n\n")

print('Hello web!')
```

First line tells this script should run on default python3. Second line prints the header. We say to browser that whatever comes with this page is plain text. and the third line is the actual page content, in our case, it's just a message 'Hello web!'. Just notice every line printed on standard output is taken by cgi module and delivered to browser. Whatever things you want to send to browser, you just print them using print function.

Lets put this script on location and tell apache that there is a cgi script. First we have enable cgi module in httpd.conf (apache configuration file)

```apache
LoadModule cgi_module libexec/apache2/mod_cgi.so
```

This line will already be there. Just make sure it's not commented out. Let's also tell apache that where to find this script

```apache
 <Directory "/Library/WebServer/CGI-Executables">
     AddHandler cgi-script .py
     Options +ExecCGI
     Require all granted
 </Directory>
 ```

/Library/WebServer/CGI-Executables is where we put hello.py. Now start apache.
```shell
sudo httpd -k start
```

Starting apache command differs for different operating system, so look for online documentation about how to start you apache. We can now head to `http://localhost/cgi-bin/hello.py` and see our first web application.

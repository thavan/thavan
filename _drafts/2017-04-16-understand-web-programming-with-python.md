---
layout: post
title: Understanding web programming with Python 1
date: 2017-04-11 09:00:00
categories: python
---

It's being said that there are more web frameworks in Python than the number of keywords in Python. The most popular ones are Django and Flask. If you can learn any one them, you will sure have a successful career as a web developer. But, have you ever thought how these web frameworks are actually working? This posts tries address that. What happens under the hood?

Let's start with a web server. What is a web server? Web server is something that delivers web pages. For example when you type google.com in your browser, you get the google home page loaded in to the browser. The page you are seeing came from a web server. When you request a page in your browser, your web server gets that request and it gives back the requested page. 

If the page is static page this works well. You just need to serve a single html page. We can put these html pages in a folder, that web server can read and you are done. But unfortunately not all servers works this way. Let's say you request a page in facebook www.facebook.com/friends/. Here facebook needs check if you are logged in and need get all of your friend from database and create a html page with all these information and send back to you. All these tasks cannot be done by a web server. They are not programming languages to do these kind of tasks. A programming language like Java, Python can do these kind of tasks.

Application servers on the other hand, are designed to process your request with specific programming language. For example a Tomcat server is a Java application server. uwsgi is a Python application application server. These application servers understands languages like Python or Java.

Now we have three main components,

    1. Web server.
    2. Application server.
    3. A programming language.

###CGI###
Let's say we received a web request, and we want to process that request with python. In this we are going to use Apache web server. CGI is called common gateway interface. CGI is basically a script that will be run by the web server whenever a request is received. The script can be a python script or a shell script or ruby script. Let's create a cgi script to process our request.


```python
#!/usr/bin/env python3

print("Content-Type: text/plain;charset=utf-8\n\n")

print('Hello web!')
```

First line tells this script should run on default python3. Second line prints the header. We say to browser that whatever comes on this page is plain text. and the third line is the actual page, in our case, it's just a message 'Hello web!'. Just notice every printed on standard output is taken by cgi module and delivered to browser. Whatever things you want to send to browser, you just print them using print function.

Lets put this script on location and tell apache that there is a cgi script. First we have enable cgi module in httpd.conf (apache configuration file)

```apache
LoadModule cgi_module libexec/apache2/mod_cgi.so
```

This line will be there. Just make sure it's not commented out. Let's also tell apache that where to find this script

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

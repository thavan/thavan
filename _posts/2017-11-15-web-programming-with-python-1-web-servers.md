---
title: Web programming with Python - Part 1 - Web Servers
date: 2017-11-14 05:00:00
updated: 2017-11-19 09:00:00
permalink: /:categories/:title/
categories:
  - Python
tags:
  - python
  - cgi
  - apache
toc:
  - true
---

## Introduction
Web programming or web development is a term that broadly means developing websites. Developing websites mainly consists of two parts.

1. Front end development.
2. Back end development.

Front end includes html, javascript and css. We can also say it is the creativity part. If you are more interested in creating beautiful websites, this is the path you should take. Backend involves in server side development including application business logic, database design and development, server deployment and maintenance and etc.

There are numerous web frameworks out there you can easily pick and getting started with web development. But, I think, it's essential to understand the basics before diving into any one of those frameworks. Through these series of posts, we are going study fundamentals of web programming and explore advanced concepts and frameworks later. As the title is of this post says, everything is explained using Python.

## Web Server
Let's start with a web server. Web server is a program that simply delivers web pages. For example when you type [www.example.com](http://www.example.com) in your browser, a web server is what gives you that page. 

### Static pages
Either web pages are already stored in the server or generated dynamically based on requested content. For example if you request this blog post, it is a very simple html page that is already stored on the server. Server program just needs to fetch and return it to your browser. Server programs are simply called servers. So if I say apache server, it means Apache server program. Do not confuse it with physical servers. Nginx, Apache and Internet Information Server(Windows) are the most popular web servers available today.

### Dynamic pages
But unfortunately this is not enough mechanism for Facebook to work. Let's say you request a page in Facebook [http://www.facebook.com/friends/](). When you request, Facebook needs check if you are logged in and it needs all of your friends information from a database and creates a page with all of these information. This is called dynamic web pages.

### Application servers
When it comes to dynamic web pages, a web server cannot do all the above mentioned tasks. Web server's job is to essentially handle incoming requests very effectively and return the response. But building a dynamic web page is not it's task. It is more of a business logic that needs to handled by a programming language. That is where application servers comes into play.

Application servers on the other hand, are designed to process your requests with specific programming language. For example a Tomcat server is a Java application server. uwsgi is a Python application application server. These application servers understand languages like Python or Java.

### Summary
We looked into three main components if web development,

    1. Web server: only serves pages - forwards requests to application server
    2. Application server. - process requests and generates response.
    3. A programming language. - used by application server.

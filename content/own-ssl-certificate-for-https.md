Title: Creating ssl certificates for dev environments
Date: 2011-12-03 03:35
Modified: 2012-02-18 19:54
Category: Python
Tags: ssl, https
Summary: How to generate custom ssl certificates

Generating custom ssl certificates is useful when we need test a https enabled site in localhost. Here is the way that I used to install security certificates in local machine for development purpose. Basically https means, the communication between the browser and server is encrypted, so that no one can read the data in-between. To accomplish this we need to put our domain specific security certificate and key in web server. For local testing we can use openssl tool for generating ssl certificate and key. My server config is Ubuntu with apache web server.

Most of the linux distribution comes with `openssl`. So you don't need to install any extra packages for doing this.

Creating Certificate: create a directory name httpd in your home directory and cd into that direcory. Type the following command in terminal.

	:::bash
	openssl req -new -x509 -nodes -out thava.org.crt -keyout thava.org.key

It asks some information about the site. Most of them are optional.

![Open ssl]({{ site.url }}/assets/openssl3.png)

Now that we have created ssl certificate for our local web server. Two files will be created in the name of thava.org.crt and thava.org.key. Now we have to add them in our server.
open apache ssl conf file, usually (/etc/httpd/conf.d/ssl.conf) and add the certificate path there. In below screenshot I have highlighted that part in red box. As I configure multiple sub-domains, I used virtual host. If you use only one main domain, you don't need to add virtual host.

![Open ssl]({{ site.url }}/assets/openssl2.png)

And finally, above certificate has been created for thava.org, so when you open the localhost url in browser, your browser will warn for a security exception. Ignore that warning and accept the security exception.


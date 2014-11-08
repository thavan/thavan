---

Title: Static Site Generator
Date: 2014-11-06 10:20
Modified: 2014-11-06 10:20
Category: Python
Tags: pelican, publishing, blog, jekyll, static-site
Slug: static-site-generator
Authors: Thavan
Status: draft
---

I wanted to try static site generators long time. Here I'm not going to explain how to use a static site generator. Instead, I'm trying to explain what is statics generator and how it can help you to be more productive.

Static site generators are tools that generators static sites. This means this static html files can be placed in server and they are ready to serve. You don't need a webserver that supports php, jsp, database, django etc.. All you need is a webserver that serves static files.

But ultimately I'm fine with conventional blogging system, like blogger. Blogger supports custom domain. Setup a new blog and setup your custom domain to that blog and you are ready to go with your new personal website. But configuring the blogger is somewhat tedious. Eventhough blogger provides extensive options to configure your blogs look and feel and layout, it always seems to be difficult to bring a design that I personally like. 

The other option is wordpress. In wordpress to setup a custom domain you have to pay for that, or you can host it in your own website. I personally hate PHP. I don't want to take all the burder by installing and configuring LAMB stack in my server.

Here comes static site generator. It works like,

* Write your posts in markup language.
* Run the static site generator to create static html pages.
* Host it anywhere.

There are two main static site generators that really impresses me.

* [Jekyll][jekyll] - A static site generator written in Ruby.
* [Pelican][pelican] - A static site generator written in Python for all those Python fans.

[jekyll]: http://jekyllrb.com/
[pelican]: http://docs.getpelican.com/

Jekyll
======
For me, both has their own pros and cons. Its up to you to choose any one of them. Since GitHub pages supports Jekyll, I choose to go with Jekyll, and from here, this post follows Jekyll and leaves pelican behind. I assume that you are using Ubuntu.

Lets install Jekyll

	:::bash
	wget http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.4.tar.gz
	tar -zxvf ruby-2.1.4.tar.gz
	cd ruby-2.1.4/
	./configure
	make
	sudo make install
	wget http://production.cf.rubygems.org/rubygems/rubygems-2.4.2.tgz
	tar -zxvf rubygems-2.4.2.tgz
	cd rubygems-2.4.2/

	apt-get install rubygems
	gem install jekyll # wait here. this step will take little bit longer without any indication.

Now type `jekyll new` to configure a new jekyll site.

Pelican
=======

Pelican on the other hand is purely written in Python. If you are a Python fan, you have to try this first, because it will be easier to debug and change the code as you already knew python. Installing is very easy. Use pip.

	:::bash
	pip install pelican

If you want to use markdown syntax, then install markdown

	:::bash
	pip install markdown
	
By running ``pelican-quickstart``, we can create a new pelican site from scratch. Pelican also allows you to write post using `RST` format. When running the ``pelican-quickstart`` command, you will be asked if you want to create a make for the site. Click yes, and you'll get lots of handy shortcuts to important functions like ``make html`` will generate the htmls in output directory, ``make serve`` will start a development server in localhost so that we can preview the website.

Migrating from other blogging platforms
---------------------------------------
Migrating from other blogs is pain when come of them. Eventhough there are lots tools availabel today, you'll have to manually make minor edits in all your previous posts. I used blogger before. After few attempts to import them in static site generator, I decided to leave the earlier posts blogger itself because they were not worthy to spend time to import them from blogger to static site. Jekyll has built-in support for importing posts from wordpress and few other networks. To import from blogger, you'll have to export them into xml in blogger dashboard, and import them in Jekyll or Pelican. There is no direct import option for blogger.

Importing is going to cause some pain, but it is worth a try.

Pelican Themes
--------------
There is a github repository, that accumulates all pelican themes in one repo. clone [this][theme-repo] repository from github and you'll be able to use theme by adding the theme directory in pelican settings file.

	:::bash
	git clone https://github.com/getpelican/pelican-themes.git
	
open pelican and add the following line.

	:::python
	THEME = "/home/user/pelican-themes/theme-name" # this should be path of downloaded theme.
	
Conclusion
----------
Considering the fact of freedom to have your content on your hand and the freedom to host it anywhere, Static site generator seems to be a good option. No fancy widgets, no custom javascript codes, no commenting system. Put everything in an organized file structure, write posts in markdown and publish it. Publish whatever file types you want.


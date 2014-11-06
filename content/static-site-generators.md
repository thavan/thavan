Title: Static Site Generator
Date: 2014-11-06 10:20
Modified: 2014-11-06 10:20
Category: Python
Tags: pelican, publishing
Slug: static-site-generator
Authors: Thavan
Summary: Summary of popular static site generators.
status: draft

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

Pelican:

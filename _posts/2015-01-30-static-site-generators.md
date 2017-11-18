---
title: Static Site Generators
date: 2015-01-30 10:20
categories:
  - Python
tags: 
  - pelican
  - publishing
  - blog
  - jekyll
  - static-site
---

Static site generators are tools that generates static sites i.e. pure html websites without backend data processing, session management or user authentication system. It should be well enough for running a blog.

How static site generators work?

* Write your posts in `markdown` or `rst`.
* Run the static site generator to parse these posts into html.
* Upload the generated output to any server that serves html (or even host it in github pages).

There are two main static site generators available today.

* [Jekyll][jekyll] - A static site generator written in Ruby.
* [Pelican][pelican] - A static site generator written in Python.

For me, both has their own pros and cons. It's up to you to choose any one of them. Both Pelican and Jekyll can be hosted in github pages.

Jekyll
======
Lets install Jekyll.

{% highlight bash %}
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
{% endhighlight %}

Now type `jekyll new` to configure a new jekyll site.

Jekyll creates following three main folders.

* `_drafts`: Place all drafts here. Once they are complete, move them to `_posts` directory.
* `_posts`: Place all published and ready to publish posts here.
* `_site`: jekyll will generate the site in this directory. This can be hosted to your webserver.

I'm not going to explain how to write posts in markdown format. This post written in markdown format. Source can be found [here][post-source].
Run `jekyll build` to build the posts and `jekyll serve` to preview them in local machine.

Publishing
----------
If we want publish it in our own server, its going to be very easy. Just copy the folder _site in your webserver and you are good to go.
Publishing in github pages, requires some further steps.

* Assuming you have a github account, create a repository with the name <username>.github.io. Replace <username> with your github username.
* In your jekyll project directory, init the git repository.

		:::bash
		git init #Add the newly created repo as new remote origin.
		git remote add origin <github project url> # add the newly created repo as remote origin
		git add <directories> <files> # add all files.
		git commit -m "Initial commit" # commit everything.
		git push origin master # push to server.

* Now wait for another twenty minutes, then your site will be up in http://username.github.io

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
Migrating from other blogs is a pain. Eventhough there are lots tools availabel today, you'll have to manually make minor edits in all your previous posts. I used blogger before. After few attempts to import them in static site generator, I decided to leave the earlier posts blogger itself because they were not worthy to spend time to import them from blogger to static site. Jekyll has built-in support for importing posts from wordpress and few other platforms. To import from blogger, you'll have to export them into xml in blogger dashboard, and import them in Jekyll or Pelican. There is no direct import option for blogger.

Pelican Themes
--------------
There is a github repository, that accumulates all pelican themes in one repo. clone [this][theme-repo] repository from github and you'll be able to use theme by adding the theme directory in pelican settings file.

	:::bash
	git clone https://github.com/getpelican/pelican-themes.git

open pelican and add the following line.

	:::python
	THEME = "/home/user/pelican-themes/theme-name" # this should be path of downloaded theme.

Commenting
----------
The only thing that you will miss mostly is commenting in your posts. People can not comment in static sites. I don't actually care about any comments on my posts. Most people use third party commenting system like [Disqus][disqus-link]. It works well with static sites. Another option is to use google+ comments.

[disqus-link]: https://disqus.com/
[theme-repo]: https://github.com/getpelican/pelican-themes
[jekyll]: http://jekyllrb.com/
[pelican]: http://docs.getpelican.com/
[post-source]: https://raw.githubusercontent.com/thavan/site/master/content/static-site-generators.md

<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.7.1 by Michael Rose
  Copyright 2017 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE.txt
-->
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">

<!-- begin SEO -->









<title>Thavanathan</title>




<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">




<meta name="author" content="Thavanathan Thangaraj">

<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="Thavanathan">
<meta property="og:title" content="Thavanathan">


  <link rel="canonical" href="http://localhost:4000/assets/js/lunr-en.js">
  <meta property="og:url" content="http://localhost:4000/assets/js/lunr-en.js">




































<!-- end SEO -->


<link href="http://localhost:4000/feed.xml" type="application/atom+xml" rel="alternate" title="Thavanathan Feed">

<!-- http://t.co/dKP3o1e -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="http://localhost:4000/assets/css/main.css">

<!--[if lte IE 9]>
  <style>
    /* old IE unsupported flexbox fixes */
    .greedy-nav .site-title {
      padding-right: 3em;
    }
    .greedy-nav button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  </style>
<![endif]-->


    <!-- start custom head snippets -->

<!-- insert favicons. use http://realfavicongenerator.net/ -->

<!-- end custom head snippets -->
  </head>

  <body class="layout--single">

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->

    <div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        <a class="site-title" href="http://localhost:4000/">Thavanathan</a>
        <ul class="visible-links">
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/about/">About</a></li>
          
        </ul>
        <button type="button">
          <span class="visually-hidden">Toggle Menu</span>
          <div class="navicon"></div>
        </button>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>

    


  
    



<nav class="breadcrumbs">
  <ol itemscope itemtype="http://schema.org/BreadcrumbList">
    
    
    
      
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <a href="http://localhost:4000/" itemprop="item"><span itemprop="name">Home</span></a>
          <meta itemprop="position" content="1" />
        </li>
        <span class="sep">/</span>
      
      
        
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <a href="http://localhost:4000/assets" itemprop="item"><span itemprop="name">Assets</span></a>
          <meta itemprop="position" content="2" />
        </li>
        <span class="sep">/</span>
      
    
      
      
        
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <a href="http://localhost:4000/js" itemprop="item"><span itemprop="name">Js</span></a>
          <meta itemprop="position" content="3" />
        </li>
        <span class="sep">/</span>
      
    
      
      
        <li class="current"></li>
      
    
  </ol>
</nav>

  


<div id="main" role="main">
  
  <div class="sidebar sticky">
  

<div itemscope itemtype="http://schema.org/Person">

  

  <div class="author__content">
    <h3 class="author__name" itemprop="name">Thavanathan Thangaraj</h3>
    
      <p class="author__bio" itemprop="description">
        Full stack developer. Python, Django enthusiast and teacher
      </p>
    
  </div>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">Follow</button>
    <ul class="author__urls social-icons">
      

      
        <li>
          <a href="http://www.thavanathan.com" itemprop="url">
            <i class="fa fa-fw fa-chain" aria-hidden="true"></i> Website
          </a>
        </li>
      

      

      

      
        <li>
          <a href="https://twitter.com/pythavan" itemprop="sameAs">
            <i class="fa fa-fw fa-twitter-square" aria-hidden="true"></i> Twitter
          </a>
        </li>
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      <!--
  <li>
    <a href="http://link-to-whatever-social-network.com/user/" itemprop="sameAs">
      <i class="fa fa-fw" aria-hidden="true"></i> Custom Social Profile Link
    </a>
  </li>
-->
    </ul>
  </div>
</div>

  
  </div>


  <article class="page" itemscope itemtype="http://schema.org/CreativeWork">
    
    
    
    

    <div class="page__inner-wrap">
      
        <header>
          
          
        </header>
      

      <section class="page__content" itemprop="text">
        
        var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Python profiling",
      excerpt: "There are three main modules that provides time benchmarking in python. 1) timeit - call it for profiling small python...",
      categories: ["python"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "An Android app to search baby names",
      excerpt: "I have published a new Android app in Play Store called “Tamil Names”. It allows you to browse through a...",
      categories: ["android"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Static Site Generators",
      excerpt: "Static site generators are tools that generates static sites i.e. pure html websites without backend data processing, session management or...",
      categories: ["python,","pelican,","publishing,","blog,","jekyll,","static-site"],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Crawling web pages using Python and Scrapy - Tutorial",
      excerpt: "In this post, let us walk through how we can crawl web pages using Scrapy.\n\n",
      categories: ["crawl,","python,","scrapy"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Python List Comprehensions and generator expressions",
      excerpt: "Comprehensions are one of the prominent features of Python. Once you understand them, it helps avoiding lots of redundant and...",
      categories: ["python"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Reduce memory usage in Python using slots",
      excerpt: "slots is a kind of Python magic that reduces memory usage of a program. It’s useful only when we have...",
      categories: ["python"],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Understanding web programming with Python 1",
      excerpt: "Web programming or web development is an art of developing web sites. It’s a broader term. There are numerous number...",
      categories: ["Python"],
      tags: ["python","cgi","apache"],
      id: 6
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Python profiling",
        "url": "http://localhost:4000/python/2013/08/28/python-profiling.html",
        "excerpt": "There are three main modules that provides time benchmarking in python. 1) timeit - call it for profiling small python...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "An Android app to search baby names",
        "url": "http://localhost:4000/android/2014/04/29/an-android-app.html",
        "excerpt": "I have published a new Android app in Play Store called “Tamil Names”. It allows you to browse through a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Static Site Generators",
        "url": "http://localhost:4000/python,/pelican,/publishing,/blog,/jekyll,/static-site/2015/01/30/static-site-generators.html",
        "excerpt": "Static site generators are tools that generates static sites i.e. pure html websites without backend data processing, session management or...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Crawling web pages using Python and Scrapy - Tutorial",
        "url": "http://localhost:4000/crawl,/python,/scrapy/2015/06/02/crawling-web-pages-with-scrapy.html",
        "excerpt": "In this post, let us walk through how we can crawl web pages using Scrapy. For this tutorial, we will...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Python List Comprehensions and generator expressions",
        "url": "http://localhost:4000/python/2017/03/19/python-list-comprehensions-and-generator-expressions.html",
        "excerpt": "Comprehensions are one of the prominent features of Python. Once you understand them, it helps avoiding lots of redundant and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Reduce memory usage in Python using slots",
        "url": "http://localhost:4000/python/2017/04/11/python-save-memory-usage-with-slots.html",
        "excerpt": "slots is a kind of Python magic that reduces memory usage of a program. It’s useful only when we have...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Understanding web programming with Python 1",
        "url": "http://localhost:4000/python/understand-web-programming-with-python/",
        "excerpt": "Web programming or web development is an art of developing web sites. It’s a broader term. There are numerous number...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});

        
      </section>

      <footer class="page__meta">
        
        


        
      </footer>

      

      
    </div>

    
  </article>

  
  
</div>


    <div class="page__footer">
      <footer>
        <!-- start custom footer snippets -->

<!-- end custom footer snippets -->
        <div class="page__footer-follow">
  <ul class="social-icons">
    
    
    
    
    
    
    <li><a href="http://localhost:4000/feed.xml"><i class="fa fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>
  </ul>
</div>

<div class="page__footer-copyright">&copy; 2017 Thavanathan. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>

      </footer>
    </div>

    
  <script src="http://localhost:4000/assets/js/main.min.js"></script>








  </body>
</html>
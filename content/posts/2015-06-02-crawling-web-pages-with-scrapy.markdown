---
categories:
- Python
date: "2015-06-02T09:00:00Z"
tags:
- crawling
- scrapy
title: Crawling web pages using Python and Scrapy - Tutorial
---

In this post, let us walk through how we can crawl web pages using [Scrapy][2].

For this tutorial, we will download all the excerpts and ebooks available in https://www.goodreads.com/ebooks?sort=popular_books. This page is paginated. Let's download books from first page only. At the end of this post, you will know how to follow and crawl other pages too.

First lets create a python virtual environment called goodreads.

{{< highlight bash >}}
mkvirtualenv goodreads
workon goodreads
{{< / highlight >}}

To know more about how mkvirtualenv and workon commands work, visit and install [virtualenvwrapper][1]

Now, lets install scrapy.

{{< highlight bash >}}
pip install scrapy
{{< / highlight >}}

After installing, lets create a new project.

{{< highlight bash >}}
scrapy startproject goodreads
cd goodreads
{{< / highlight >}}

This will create the following directory structure.

    ├── goodreads
    │   ├── __init__.py
    │   ├── items.py
    │   ├── pipelines.py
    │   ├── settings.py
    │   └── spiders
    │       └── __init__.py
    └── scrapy.cfg

For this tutorial, we will only touch spiders directory, settings.py, items.py. Spider directory will contain all the spiders, otherwise called crawlers. settings.py will have project related settings. items.py will define your models. Model or Item is a definition of a object that you are going to crawl. For example, if we crawl stock details from a page, we can define a item like the one below

{{< highlight python >}}
class Stock(scrapy.Item):
    company_name = scrapy.Field()
    price = scrapy.Field()
{{< / highlight >}}

For our project we will create a item with following field. open goodreads/items.py and add following lines.

{{< highlight python >}}
import scrapy

class GoodreadsItem(scrapy.Item):
    file_name = scrapy.Field()
{{< / highlight >}}

We will save downloaded path of the document in file_name field.

Now lets create a spider to crawl books. Run the following command in terminal.

{{< highlight bash >}}
    scrapy genspider goodread_spider http://www.goodreads.com/ebooks?page=1&sort=popular_books -t crawl
{{< / highlight >}}

This will generate the spider file called goodreads_spider. A spider is somethings that crawls web pages and follows the links on that page to crawl other pages. Spider itself will not follow links available in a page. We have to define rules to follow links.

Open goodreads/spiders/goodread_spider.py

Let's adjust some variables according to out site.

{{< highlight bash >}}
allowed_domains = ['www.goodreads.com', 's3.amazonaws.com']
start_urls = ['http://www.goodreads.com/ebooks?page=1&sort=popular_books']
{{< / highlight >}}

s3.amazonaws.com is where goodreads books are hosted. So we have to add this domain to allowed_domains list.

Now lets add a rule to follow and download ebook. Edit the rule defined to match with following line.

{{< highlight python >}}
rules = (
    Rule(LinkExtractor(allow=r'ebooks/download/.*'), callback='parse_item', follow=True),
)
{{< / highlight >}}

follow=True means follow them if any other links present in the crawled page. Even if follow is true, it should match any of defined rules. ebook/download/<item_id> will actually return ebook document. It may be any file including pdf, epub, mobi and zip.

Every time an item is fetched our callback function parse_item will called with the response object.

Lets make some changes in parse_item function in the same file to save our downloaded books. Edit the parse_item function to match with the following lines.

{{< highlight python >}}
from goodreads.items import GoodreadsItem
from scrapy import log

def parse_item(self, response):
    if not response.headers['Content-Type'] == 'text/html; charset=utf-8':
        item = GoodreadsItem()
        item['file_name'] = '/Users/thavan/learnspace/ebooks/' + response.url.split('/')[-1]
        with open(item['file_name'], 'wb') as f:
            f.write(response.body)
        log.msg('Path {0}'.format(item['file_name']), level=log.DEBUG)
        return item
{{< / highlight >}}

We have added an if condition to make sure we download only books not html pages. If it is text/html we omit the response else we save the response in a file.

Now lets run the crawler

{{< highlight bash >}}
scrapy crawl goodread_spider
{{< / highlight >}}

As mentioned earlier, this spider will crawl books in only first page. To crawl all the books in different pages, we have to add one more rule. Add the below line to Rules tuple in goodread_spider.py

{{< highlight bash >}}
Rule(LinkExtractor(allow=r'ebooks\?page=\d+&sort=popular_books'), follow=True),
{{< / highlight >}}

That's it for now. Use settings.py to change project related settings. User agent can be changed in settings.py. Open goodreads/settings.py and change the USER_AGENT. You can also set delay between every page request. DOWNLOAD_DELAY = 0.25 will set 250ms delay before sending a request.

As a final note, crawling a website going to give extra load to server. The example given in this tutorial is only for educational purpose. Crawl responsibly by identifying yourself (and your website) on the user-agent.

[1]: https://virtualenvwrapper.readthedocs.org/
[2]: http://scrapy.org/

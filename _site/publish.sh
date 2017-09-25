#rm -rf /Users/thavan/workspace/www.thavanathan.com.appengine/www
#rm -rf /Users/thavan/workspace/www.thavanathan.com.appengine/public

#cp -r /Users/thavan/workspace/www.thavanathan.com/_site /Users/thavan/workspace/www.thavanathan.com.appengine/www
#cp -r /Users/thavan/workspace/www.thavanathan.com/public /Users/thavan/workspace/www.thavanathan.com.appengine/public

#cd /Users/thavan/workspace/www.thavanathan.com.appengine
#gcloud app deploy
scp -r _site/* thavan@thavanathan.com:/var/www/www.thavanathan.com/

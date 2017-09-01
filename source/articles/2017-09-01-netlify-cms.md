---
title: Netlify CMS
date: 2017-09-01T14:59:08.929Z
category:
  - tech
tags:
  - netlify cms
  - blogging
---
Before I started moving back my site to static publishing, there is one thing thats holds me and also the rest of other users into static site: the lack of CMS.

But to come up with a CMS for static site, let us go back how they we're built. First, you write something in Markdown then you build that site through a shell command that uses time and resources. That wasn't easy at all. Considering you need to manually rebuild your site everytime you make an update. 

But thanks to these modern tools in software development such as build systems/CI and Git (particularly Github for popularization of the tool), we can now feasibly able to make a CMS aimed for static sites - and someone made it.

As you might know, Netlify, a static site similar to Github pages, created Netlify CMS. It's a little Javascript app that sits in your site's repo in order to manage your content. But before that, this is how it works.

## How it works
_Like the title says._

As I mentioned earlier, this thing cannot be possible without those tools I mentioned.  This CMS uses Github  API to access and manage the site repo.  Drafts are made in a form of proposing a pull request and updates are then committed. Once you're done writing, it will be sent to Netlify to build the site. However, you need to also host your site to Netlify in order to use this.

## First Inpressions
When I started to set-up this, it was very straightforward. Put an admin folder, set-up the files particularly the `config.yml` file and that's pretty much it. I expect to be this easy but say it still requires you to have a little bit of technical skills for you to get it working.

When I entered the admin interface it was very cluttered and some functions do not work at all. That's when I realized I got the wrong version of the CMS so it was not a bummer at all.

It was nice to write but the lack of responsiveness in screen size made me difficult to blog when I'm on the go  especially when something's worth to write on in  the middle of the night so that's a bummer for me. 

## Problems (?)

First of all, your site must need to be on hosted on Netlify. 

Second, Netlify's docs are  a bit outdated and some pages had dead links in it. There was this moment when I was stuck in making authentication getting to work and the docs lead me to a page that got deleted. Luckily, the broken beta version of the site had it but still it is nice to be updated in a way that can be accessible and doable to less technical users and also with no dead links whatsoever.

Third, there is no third-party support other than Github. I understand that Gitlab's API docs are quite complicated and Bitbucket's are quite the same as Github's so you may wanna invest with that one.

Lastly, I find it difficult to set up the configuration file and there is no defaults in it that you must set-up a few fields in order to publish properly. Also, I think it's very confusing on how you create custom settings based on the example on the docs. In short, it needs to have a predefined template config that less technical users can just copy and paste it to get it up working.

So there you have it, that's my experience with Netlify CMS and I must say it has a very long way in order to be an "easy-to-set-up" static site CMS that everyone wants like what they do on Wordpress. I hope sooner or later we can find an alternative much greater than this one.  

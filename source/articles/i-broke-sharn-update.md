---
title: I Broke Sharn (Update)
date: 2017-08-12T17:39:31+08:00
category:
  - Tech
tags:
  - sharn
  - crystal language
  - github
  - open source
---
Hi! It's been a while since my very last post so I decided to get back again despite having few visitors in this blog :( .

A couple of months ago, I launched "**Sharn**" - my first ever open source project written in Crystal that tries to solve the problems I had with the Shards dependency manager.  *Sort of Yarn for Crystal.*

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">What sharn can really do ryt now<br>- see whats installed<br>- add/removes deps<br>- still no automatic install<a href="https://t.co/tl9JbsMEpY">https://t.co/tl9JbsMEpY</a><a href="https://twitter.com/hashtag/crystallang?src=hash">#crystallang</a> <a href="https://t.co/HOG4GgcYtZ">pic.twitter.com/HOG4GgcYtZ</a></p>— nedpals. (@npned) <a href="https://twitter.com/npned/status/884021715755335680">July 9, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

\(Got noticed by senpai [Serdar](https://twitter.com/sdogruyol)! wowwww)

It was a rough start. It is easy to pseudocode it in my head but turns out to be very complicated to implement since all the things I wanted to happen doesn't do anything at all and second, it's my first time to code on a statically-typed/compiled language. The project I have done turned out to be very great until something happened last month.

Last July, I was working on a new update to support adding `developmentDependencies` through the `--dev` flag. That was good now but the problem is the position of the devDep's data is in the bottom of the `shard.yml` file. So another complex thing happens, broke the project, and got accidentally pushed the broken code to the master branch.

# Why is this a big deal?

\*Just to have something to post in this blog? Just kidding. \*

The truth is, I just wanted to let you know that I'm giving up in this project but it doesn't mean Sharn is dead. I got the basic features working on it but was broken because of the incident happened. On the other hand, this is my own version that I pitched in [Shard's repo issue](https://github.com/crystal-lang/shards/issues/144#issuecomment-313858633) and this might not be the better version of the feature currently being discussed.

If you like what I did, feel free to fork the project, fix, optimize or whatever you wanna do with the code, and submit a pull request. That's all!

---
title: Stack Overflow-style Rails app versioning
date: 2016-12-23
type: post
published: true
status: publish
categories:
- Tech
tags:
- app versioning
- rails 5
- rails app
- ruby
- ruby on rails
- semver
- tutorial
author: ned
---
<p>Hours ago, I was searching for ways to put a version number to my Rails app. SemVer is good but I want other way of versioning the app so I found this <a href="http://minhajuddin.com/2011/07/25/easily-show-current-version-number-of-your-app-stackoverflow-style/">tutorial</a>.<br />
However, it didn’t work at all so I fixed it. Here’s the code:</p>
<p><b>config/initializers/version.rb</b></p>
{{< highlight ruby >}}
class LemonadePubSys::Application
    APP_VERSION = `git --work-tree="#{Rails.root}" log -1 --date=short --format="%ad-%h"`.gsub!(/-/,'.').strip
end
{{< /highlight >}}
<p>The difference between Khaja’s and mine is that I replaced shell command <code>sed</code> with the Ruby’s <code>gsub!</code> so that the command will work properly. I also added <code>strip</code> to remove newlines and the code was put in an initializer file since putting it into <code>application.rb</code> file won’t recognize it.</p>
<p>This is working for Rails 5 and above.</p>

+++
category = []
date = "2019-01-31T20:00:00+08:00"
featureimage = ""
tags = ["ruby", " api", "update"]
title = "Updates on Deped K12 SHS API"

+++
April of last year I created an [API](https://github.com/nedpals/k12-shs-api) that aggregates a list of schools that has Senior High School program from the Philippines' Department of Education (DepEd) website. Few months later I stopped maintaining the API in favor of the fork that is using Javascript instead of Ruby.

Today, it is unfortunate to announce it to you that the existing dataset uploaded on Github will be the last version of the listing. I've realized that the DepEd website was redesigned and some of their pages we're updated including the list. The new list is not as intuitive and difficult to scrape than the previous one.

While it is unclear whether they updated their listings prior to the redesign, it is also impossible to track them by using the copies stored in the Internet Archive as not all of the pages are crawled and snapshotted by the service.

To everyone who read this, I would advise to stop using the scraper immediately as it outputs empty data. And that all API services such as the [Public REST API](https://shs-k12-api.now.sh/) will be retaining the data the last time it was scraped. Also, I have informed the maintainer of the fork about this situation and the repo has now been pulled off shortly after notice.

Until we can find a good alternative for this, it is not in my priority to fix this issue. Thanks to everyone who have used this API.
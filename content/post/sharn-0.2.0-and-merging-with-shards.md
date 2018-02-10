+++
category = []
date = "2018-02-10T08:06:27+00:00"
featureimage = ""
tags = []
title = "Sharn 0.2.0"

+++
{{< figure src="/images/uploads/Screenshot from 2018-02-05 20-49-18.png" >}}

Hello guys! I am back for another blog post about Sharn - my first open source project written in Crystal, talking about it's first ever stable release and a good news to all of you.

Four days ago, I've released Sharn 0.2.0 - the first ever stable release which means you can now use it safely and in production! This includes adding of developmentDependencies into your project's shard.yml file, optimizing all of the four commands (add, rm, install, update), and some improvements in repo detection.

Aside from that, I've made the code base more easier to manage by putting all helpers and commands into it's own separate files and taking advantage of the [`cli` shard's module importation](https://github.com/mosop/cli/wiki/Making-Command-Classes-DRY).

While it lacks error handling and proper documentation, this will be fixed in the later release.

## Good news

The day after I released 0.2.0 into the public particularly in [Reddit](https://reddit.com/r/crystal_programming) and [Crystal \[ANN\]](https://crystal-ann.com/), I've received a message from one of the [Crystal Language](https://github.com/crystal-lang/crystal)'s core developers and maintainer of the [Shards](https://github.com/crystal-lang/shards) maintainer Ary Borenszweig about the possibility of merging (or integrating) Sharn's features into the dependency manager's core. 

This is very exciting for me as this will change the way people manage their project's dependencies and ease development despite it's limitations in the formatting. At the same time, I'm very nervous as I will be the one who will implement it but I will do my best for it. I might complete this before the end of March as my junior high school will be nearing to an end.

On the other side, it doesn't mean I will stop the project after merging it. Sharn will continue to evolve by experimenting features such as running scripts (similar to `npm run`) to anything that is related to post-installation of shards in order to have the best package management experience for Crystal developers.

{{< figure src="/images/uploads/Screenshot from 2018-02-05 20-50-42.png" >}}

That's it for today. Don't forget to try and leave a star for Sharn by visiting [https://github.com/nedpals/sharn](https://github.com/nedpals/sharn) and if you have problems, please file an issue.

**Update: Fixed image loading and formatting**
**Update 2: Messed up my edits**

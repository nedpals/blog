---
title: Rethinking Sharn
date: 2018-04-02 18:05:53 +0800
category:
- tech
- and more
tags:
- shards
- update
- crystal
- programming
- sharn
- software

---
Hello. Welcome back again to my blog. There's a lot of things happened since my last post. I completed my junior high, I had a part-time job as a WordPress theme developer (still a thing), and... I haven't made any improvements to Sharn. Wait what.

Last March I have made some very optimistic plans about incorporating Sharn into Shards but what happened? The PR was kind-of rejected. It was rejected by the same person who reject to push this feature due to its "cost of maintainance and complexity". I, on the other hand, got deeply discouraged to continue the PR and made a long note about it. But there was this point where I think that this wasn't ready yet.

You see, the former (Sharn) and the latter (Shards) have differences in terms of the codebase structure and it's dependencies. Sharn has this very simple codebase where all functions are not refactored and spaghetti code everywhere. Shards on the other hand, is a mature and complex project that you need to study where it goes and how its individual files used. The structure may be one of the factors but also one of the main issues is it's dependencies.

Right now Sharn relies heavily on CLI shard by mosop to create a command line app that's no-brainer. Shards only uses one shard which is for unit testing. Recently, someone reported in Sharn's project repo about the core dependencies' compatibility with the latest version of Crystal. Crystal is still evolving as you may have know and the CLI shard was last updated almost a year ago which had a lot of breaking changes since then. 

As there is a PR for the latest version, I tried it out and ended up broke my program. There was this point where I think that it should be rebuilt from the ground up and must not be dependent to whatever library it hooks up to avoid fragmentation or compatibility problems like the Shards dependency manager is it right now.

Right now I'm in the process of removing the dependency and use stdlib's OptionParser instead. Aside from removing dependencies, during this process, I will change the structure of the code ala-Shards for it to be seamlessly integrated into Shards and  make way for a possible PR comeback in the near future.

Back to the reviewer's disagreements to this feature, "cost of maintainance" is a less of a problem now as it is being simplified and thought out its limits in order to greatly reduce the impact of failure when using it. "Complexity", on the other hand, is an issue need to be carefully thought out and like I said simplifying its process is one way to make it easier to understand and contribute since this is open source.

Right from the very start, my goal was to make dependency management easier and simpler when managing a Crystal project whether is an app or a library. Rethinking Sharn into a Shards feature by being structured like the latter and free from dependencies is a right step of direction.
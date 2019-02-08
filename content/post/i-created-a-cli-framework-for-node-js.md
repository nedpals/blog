+++
category = []
date = "2019-02-08T00:00:00+08:00"
featureimage = ""
tags = ["kumander", "node.js", "tools"]
title = "I created a CLI framework for Node.js"

+++
Few weeks ago, I was bored on what should I do. The site I am currently working on with my client has been stopped for a while due to some issues. So I decided to start experimenting and create a tool based on [Typescript](https://typescriptlang.org). Typescript has taken over the Javascript community recently. Many developers we're very satisfied and claimed to have their productivity increased than before so I am very curious to try it. And few days later, my first ever project written on Typescript was created - a CLI framework for Node.js.

So why create a CLI framework? A couple of weeks ago, I tried to do an experiment using [Sharp](https://github.com/lovell/sharp) which is an image processing library for Node. The purpose of creating this tool is to help me optimize and compress images in a folder in order to save some space. I posted this experiment on Facebook and turns out someone had an interest in using my tool. The problem is, the command-line stuff I did is very messy and it's very hard to operate this kind of thing. Frameworks like [OCLIF](https://github.com/oclif/oclif) just adds complexity to just a simple project which is unnecessary to do so that's why I created one instead.

The state of CLI frameworks in Node isn't really kind of interesting to look at. Why bother to disrupt that part of Node? Turns out if you have the motivation to solve a particular problem, then build it. Besides, it adds experience too.

Anyways, one of the things I did to my framework is that I've taken approach from [ExpressJS](https://expressjs.com). This approach is easier to grasp and integrate into simple programs. It's easier to add an option and command. To test that, I tried to integrate it into my existing program I mentioned earlier. In less than 5 minutes, I was able to make it into a proper CLI program that is usable. Compared to the class-based CLI frameworks, I don't need to put my function into a separate file which adds complexity. Everything seemed to work because of this approach.

Aside from that, I made a simple flag/argument parser from scratch. The design is not yet final but it can handle options and unknown arguments from the `process.argv` array easy. Best of all, there's no dependencies required (except with the Node typings I used in making of this which is completely unecessary in using this framework) so rest assured that this won't add to the already complex `node_modules` folder.

If you're interested, the name is **Kumander** and it's available on [NPM](https://npmjs.com/package/kumander) on alpha stage. The API and all the other stuff right now are not yet stable so I marked them as alpha release. You may also check out the [GitHub](https://github.com/nedpals/kumander) for more details.
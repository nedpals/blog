---
title: Starmobile Play Plus Rooting Guide
date: 2016-11-25
type: post
published: true
status: publish
categories:
- Tech
tags:
- android
- rooting
- sc7731
- spreadtrum
- starmobile
- starmobile play plus
author: ned
---
<p>So I got this Php2390 phone called the Play Plus, a budget Marshmallow phone by Starmobile. It has decent features but you know what when you use this phone in real life you will gonna lose your patience with this one because it has a <b>very crappy performance</b>.&nbsp;</p>
<figure class="tmblr-full"><img src="/images/uploads/tumblr_inline_oh73cdM9OL1uz3jh6_540.jpg" alt="image" /></figure>
<p>So I was finding for hacks for this phone in order to solve this problem, but none of those things have solved my problem. And here’s what I did in order to hacked and get rooted.</p>
<h2>1. Install Custom Recovery</h2>
<p>The problem with all those custom recoveries made for the SC7731/C chipset is that it is intended for users who use the Lollipop firmware and those are not compatible with the Marshmallow firmware. So what I did was to port the Cyanogen Recovery and not the TWRP recovery because the touchscreen doesn’t work when I use it.</p>
<p>Download: <a href="https://drive.google.com/file/d/0B8k8uNG80jEub05OaThaZG5WekE/view?usp=sharing">https://drive.google.com/file/d/0B8k8uNG80jEub05OaThaZG5WekE/view?usp=sharing</a></p>
<p>In order to flash it, you must have Android SDK platform tools installed. But since we’re only gonna use the Fastboot in this procedure we will use the <a href="https://www.androidfilehost.com/?fid=385035244224386526">Minimal ADB and Fastboot tool</a> to proceed immediately.</p>
<h2>1.1 Pre-flash instructions</h2>
<p>First is to connect your phone to the PC through phone’s USB cable then enable “USB Debugging” by going to the Developer settings. If you don’t have Developer settings on the settings list, you must go to the about page then press the build number couple of times until it says it is enabled.</p>
<h2>1.2 Main flash procedure</h2>
<p>Now go to the folder where Fastboot is located and press and hold SHIFT then right click then select “<b>Open command window here</b>.”</p>
<p>Then reboot your phone to fastboot mode with this command:</p>
<blockquote><p>adb reboot bootloader</p></blockquote>
<p>Now if you entered the fastboot mode successfully, you may now do the following by typing this command:</p>
<blockquote><p>fastboot flash recovery &lt;directory to the custom recovery&gt;</p></blockquote>
<p>Once its done, reboot your phone.</p>
<blockquote><p>fastboot reboot</p></blockquote>
<p>Then reboot to recovery by doing the “adb reboot recovery” command. If it’s successful, congratulations!</p>
<h2>2. Main event</h2>
<p>With the strict security Google implemented in Marshmallow, rooting is harder than ever before. Luckily, Chainfire introduced a new way of rooting method called <b>Systemless Root</b> - a rooting method that doesn’t write to the system partition in order to root it. It has significant benefits though especially to this phone. One, you can temporarily unroot it when you do OTA updates and two, it is more safer than the traditional root.</p>
<p>Download the latest systemless <a href="https://download.chainfire.eu/897/SuperSU/BETA-SuperSU-v2.67-20160121175247.zip">SuperSU here</a> and flash it via ADB or through the recovery. Voila! That’s it.</p>
<h2>3. Additional notes</h2>
<p>Systemless Root isn’t stable as of now as many apps aren’t supporting this yet. But you can now use Xposed to tweak your phone. Happy hacking!</p>

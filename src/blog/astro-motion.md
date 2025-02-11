---
title: "Astro with Motion.dev without a framework"
pubDate: 2024-12-09
description: "Learn how to get started with Motion.dev in an Astro project for beautiful and simple animations."
slug: "astro-with-motion"
image:
  url: "/astro-motion.png"
  alt: "code snippet"
---

Astro is one of the most influential web frameworks around today and it is showing no signs of slowing down. Odds are pretty good if you haven't used Astro yet, you probably have heard of it. Astro has a ton of great features for making fast, performant applications in a mostly unopinionated way. Astro gives you the tools and lets you build how you want and what you want.

Up until recently, if you wanted to add animations to your Astro project, the View Transitions API made it simple for animating the transition between pages, but to style each individual component you were going to have to make your own animations using the tools CSS provides. There is nothing wrong with building your own animations, and you should be able to animate your components without a library, but it can be a lot of work.

If you haven't used it already... let me introduce you to Motion.dev! A React animation library that recently expanded to vanilla JavaScript, which integrates with Astro seamlessly. For this example, I am not going to go too deep into the ins and outs of the library, I just want to give a quick introduction to how you can get started with it in an Astro project. I highly recommend you dive into their docs as you really get involved with the library.

Here is all the JavaScript you have to add to the starter code to start seeing the animations:

```javascript
import { animate } from "motion";

animate("#title", { y: [-60, 0] }, { type: "spring", damping: 9 });
animate("#motion", { opacity: [0, 1] }, { delay: 2.5 });
animate("h1", { y: [-65, 0] }, { type: "spring", damping: 10, delay: 0.1 });
animate(
  "code",
  { rotateZ: [0, 360] },
  { type: "spring", damping: 10, delay: 0.4 },
);
animate(
  ".button",
  { x: [300, 0] },
  { type: "spring", delay: 0.3, damping: 30 },
);
animate("#discord", { opacity: [0, 1] }, { delay: 1.6 });
animate(
  ".box",
  { x: [-500, 0], opacity: [0, 1] },
  { type: "spring", damping: 12, delay: 1.9 },
);
```

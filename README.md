# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS
- Flexbox
- JavaScript

### What I learned

In this project, I learned about the popover attribute. It's an easy way to make popovers that appear when we click on elements. 

```html
<p popovertarget="box">Share</p>
<div popover id="box"></div>
```

I also learned how to make a box with triangle arrow
```css
.box:after {
  content: '';
  position: absolute;
  right: calc(50% - 15px);
  bottom: -15px;
  border-bottom: none;
  border-inline: 15px solid transparent;
  border-top: 15px solid var(--box-color);
}
```

### Useful resources

- [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Popover usage example](https://www.youtube.com/watch?v=DNXEORSk4GU)

# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- Vanilla JS (`fetch` + `data.json`)

### What I learned

Working with layered gradients was the tricky part — especially the score circle fading into transparent. Also got more comfortable using `hsla()` for the light tint backgrounds on each summary row instead of hardcoding extra colors.

```css
.score-circle {
  background: linear-gradient(
    180deg,
    var(--violet-blue),
    var(--persian-blue)
  );
}
```

For the bonus I loaded the scores from `data.json` and built the list in JS. Added a small fallback array so it still shows something if you open the HTML file directly without a local server.

### Continued development

Want to practice more with CSS Grid layouts and get better at matching spacing to design files without guessing as much.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

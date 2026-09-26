# Twitter Clone (markup)

Static HTML/CSS recreation of the Twitter home timeline, split into BEM-style CSS blocks (sidebar menu, tweet, trends, who-to-follow).

**Category:** Clones  
**Tech:** HTML, CSS, Typed.js

## How to run

No build step or install needed. Open `twitter/index.html` in a browser.

Or serve the folder locally (recommended for pages that call an API or load local files):

```bash
cd "18_Clone"
python3 -m http.server 8000
```

then visit http://localhost:8000/twitter/index.html.

## Files

```
twitter/.gitignore
twitter/index.html
twitter/css/global.css
twitter/css/blocks/brand.css
twitter/css/blocks/layout.css
twitter/css/blocks/sidebar-menu.css
twitter/css/blocks/trends-for-you.css
twitter/css/blocks/tweet.css
twitter/css/blocks/who-to-follow.css
```

Plus 11 asset files (images, audio, fonts, etc.).

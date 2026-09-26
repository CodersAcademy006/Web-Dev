# Daily Journal

Blog-style daily journal built with Node.js, Express and EJS templates: compose posts, read each one at `/posts/<title>`, plus About and Contact pages. Posts live in memory.

**Category:** Framework & Full-Stack Apps  
**Tech:** JavaScript, CSS, EJS, Express

## How to run

```bash
npm install
node app.js
```

Then open http://localhost:3000. Posts are kept in memory and reset when the server restarts.

## Files

```
app.js
package.json
public/css/styles.css
views/about.ejs
views/compose.ejs
views/contact.ejs
views/home.ejs
views/post.ejs
views/partials/footer.ejs
views/partials/header.ejs
```

Plus 4 asset files (images, audio, fonts, etc.).

> **Known issue:** `app.js` renders `About` and `Contact`, but the templates are `views/about.ejs` and `views/contact.ejs`. This works on macOS/Windows but fails on case-sensitive file systems (Linux servers). Rename the templates or the `res.render` calls to match.

## Original notes

### Daily-Journal

A daily journal website made using HTML, CSS, Bootsrap, Javascript and Ejs (for templating).
<br>
<h2>Features:</h2>
<p>1. User can write blogs and read them.</p>
<p>2. They can search blogs related to topics using specific keywords.</p>
<p>3. Dedicated about and contact us page.</p>

<h1>Home Page</h1>
<img src="https://github.com/Khushi260/Daily-Journal/blob/main/home.png">
<br>
<br>
<h1>Write Blogs</h1>
<img src="https://github.com/Khushi260/Daily-Journal/blob/main/compose.png">
<br>
<br>
<h1>Read Blogs</h1>
<img src="https://github.com/Khushi260/Daily-Journal/blob/main/post.png">

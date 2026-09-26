# Notes App (modular)

Notes app split into small modules (`note.js`, `note-dom-helper.js`) that create and remove notes in the DOM.

**Category:** Tools & Apps  
**Tech:** HTML, JavaScript, CSS

## How to run

No build step or install needed. Open `index.html` in a browser.

Or serve the folder locally (recommended for pages that call an API or load local files):

```bash
cd "57_notes-app"
python3 -m http.server 8000
```

then visit http://localhost:8000/index.html.

## Files

```
index.html
scripts/index.js
scripts/note-dom-helper.js
scripts/note.js
styles/styles.css
```

Plus 1 asset file (images, audio, fonts, etc.).

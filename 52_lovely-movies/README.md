# Lovely Movies

Search movies by title and see posters and details from the OMDb API. Requires an OMDb API key in `scripts/services.js`.

**Category:** API-Powered Apps  
**Tech:** HTML, JavaScript, CSS

## How to run

No build step or install needed. Open `index.html` in a browser.

Or serve the folder locally (recommended for pages that call an API or load local files):

```bash
cd "52_lovely-movies"
python3 -m http.server 8000
```

then visit http://localhost:8000/index.html.

> **API key needed:** this app calls the OMDb API. Get a free key from OMDb and put it in place of the key in the script before running.

## Files

```
index.html
scripts/index.js
scripts/services.js
styles/styles.css
```

Plus 1 asset file (images, audio, fonts, etc.).

# Web Chat App

Chat UI built from vanilla Web Components (brand, authed user, chat message) with random users from randomuser.me.

**Category:** Tools & Apps  
**Tech:** HTML, JavaScript, CSS

## How to run

No build step or install needed. Open `index.html` in a browser.

Or serve the folder locally (recommended for pages that call an API or load local files):

```bash
cd "306_web-chat-app"
python3 -m http.server 8000
```

then visit http://localhost:8000/index.html.

## Files

```
index.html
components/active-chat.js
components/app-brand.js
components/authed-user.js
components/chat-box.js
components/chat-list-item.js
components/chat-message.js
components/chats-list.js
components/component.js
components/new-message.js
scripts/chat-app.js
scripts/data-factory.js
scripts/index.js
scripts/recorder.js
styles/styles.css
```

Plus 3 asset files (images, audio, fonts, etc.).

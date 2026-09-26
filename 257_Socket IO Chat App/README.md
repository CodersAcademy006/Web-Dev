# ChatCord

Real-time chat with rooms built on Node.js, Express and Socket.IO, using the Redis adapter to share state.

**Category:** Framework & Full-Stack Apps  
**Tech:** JavaScript, HTML, CSS, Express, Redis, Socket.IO, Font Awesome

## How to run

Needs a Redis server on `127.0.0.1:6379` (the Socket.IO Redis adapter connects to it at start-up).

```bash
redis-server &   # or: brew services start redis
npm install
npm start        # or: npm run dev (nodemon)
```

Open http://localhost:3000 (override with `PORT`), pick a username and room, and chat. Open a second tab to see messages arrive in real time.

## Files

```
.gitignore
package.json
server.js
_html_css/chat.html
_html_css/index.html
_html_css/css/style.css
_html_css/js/main.js
public/chat.html
public/index.html
public/css/style.css
public/js/main.js
utils/messages.js
utils/users.js
```

Plus 1 asset file (images, audio, fonts, etc.).

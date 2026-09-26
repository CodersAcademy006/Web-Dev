# Web-Dev

A collection of **286 small web-development projects**: games, tools, API demos, landing pages, site clones, CSS effects and a few React / Next.js / Svelte / Node.js apps. Most are plain HTML, CSS and JavaScript that run by opening a single file in the browser, which makes the repo a handy reference for beginner and intermediate front-end work.

Every project lives in its own numbered folder (`<number>_<name>`), and every folder with code has its own `README.md` explaining what it does, the tech it uses, how to run it and which files matter.

## Quick start

```bash
git clone https://github.com/CodersAcademy006/Web-Dev.git
cd Web-Dev
```

- **Plain HTML/CSS/JS projects (most of them):** open the project's `index.html` (or the file its README names) in a browser. For projects that call an API, serving the folder is more reliable: `cd "<folder>" && python3 -m http.server 8000`.
- **React / Next.js / Svelte / Node.js projects:** `npm install` and then the start command given in that project's README.
- **Python scripts:** see the project README for the `pip install` line.

## Contents

| Category | Projects |
|---|---|
| [Games](#games) | 34 |
| [Tools & Apps](#tools--apps) | 59 |
| [API-Powered Apps](#api-powered-apps) | 20 |
| [Websites & Landing Pages](#websites--landing-pages) | 47 |
| [Clones](#clones) | 8 |
| [UI Components & CSS Effects](#ui-components--css-effects) | 72 |
| [Framework & Full-Stack Apps](#framework--full-stack-apps) | 11 |
| [Python Scripts](#python-scripts) | 3 |
| [Learning Exercises](#learning-exercises) | 20 |
| [Empty / Placeholder](#empty--placeholder) | 12 |

## Games

| # | Project | Description |
|---|---|---|
| 2 | [2048 Game](2_2048%20Game/) | Browser version of the 2048 sliding-tile puzzle. Use the arrow keys to merge equal tiles and reach 2048. |
| 13 | [Car Racing Game](13_Car-Racing/) | Top-down car racing game. Steer with W/A/S/D to dodge oncoming cars on a scrolling road. |
| 16 | [Chess Game](16_Chess%20Game/) | Two-player chess on one screen with piece images and a turn indicator. |
| 21 | [Connect Four](21_Connect-Game/) | Two-player Connect Four. Drop red and yellow discs and the game detects four in a row. |
| 30 | [Dino Game](30_Dragon%20Game/) | Endless runner in the style of the Chrome dinosaur game: jump over obstacles and score points. |
| 39 | [Tic Tac Toe](39_Game/) | Two-player Tic Tac Toe where X and O alternate turns. |
| 46 | [Math 4 Kids](46_Kids/) | Arithmetic practice game for children with separate multiply, subtract and divide pages that generate random questions. |
| 47 | [Snakes and Ladders](47_Ladder/) | Snakes and Ladders board game with dice rolls in the browser. |
| 59 | [Othello](59_othello-board-game/) | Two-player Othello (Reversi) with board and cell classes that flip captured discs. |
| 72 | [Quiz App](72_Quiz%20app/) | Multiple-choice quiz that shows one question at a time and a final score. |
| 73 | [Quiz App with Timer](73_Quiz%20Website/) | Timed multiple-choice quiz with a countdown per question, answer feedback and a result screen. |
| 74 | [Simple Quiz](74_quiz-app/) | Minimal quiz built from small helper modules that render questions and track the score. |
| 79 | [Rock Paper Scissors](79_Rock-Paper-Scissors%20Game/) | Rock Paper Scissors against the computer with animated hands and a result message. |
| 84 | [Snake Game](84_Snake%20Game/) | Classic Snake: eat food to grow, avoid walls and yourself. Keeps a high score and has on-screen controls for mobile. |
| 86 | [Spelling Bee](86_Spelling%20game/) | Spelling game: an image is shown and you type the word it represents. |
| 90 | [Tic-Tac-Toe](90_toe%20game/) | Two-player Tic Tac Toe with win and draw detection and a restart button. |
| 137 | [Drum Kit](137_Drum%20kit/) | Play drum sounds by clicking the drums or pressing the matching keys (w, a, s, d, j, k, l). |
| 138 | [Drum Kit](138_drum-kit/) | Keyboard and click driven drum kit with sounds and button animations. Original live demo: https://biniltomjose1278.github.io/drum-kit/ |
| 139 | [Drum Kit](139_drumkit/) | Another version of the keyboard/click drum kit. |
| 140 | [Dynamic Quiz](140_Dynamic%20Quiz/) | Quiz that builds its questions from a JavaScript array and scores the answers ("Learning JS Properly" project #1). |
| 190 | [Maze Game](190_Maze%20Game/) | Randomly generated maze with physics from Matter.js. Move the ball to the goal with W/A/S/D or the arrow keys. |
| 193 | [Memory Game](193_Memory-game/) | Card-matching memory game. Original live demo: https://dimple-choudhary.github.io/Memory-game/ |
| 196 | [Whack-a-Mole](196_Mole%20in%20a%20Hole%20Game/) | Whack-a-mole: click moles as they pop out of holes to score. |
| 208 | [Online Mock Test System](208_OnlineMockTestSystem/) | Single-file timed mock-test/quiz with questions, a timer and a solutions view. |
| 223 | [Let's Quiz](223_Quiz-app/) | Single-file Bootstrap quiz app. |
| 238 | [Rock Paper Scissors](238_Rock%20Paper%20Scissors/) | Rock Paper Scissors with images against the computer. Open `rock_paper_scissiors.html`. |
| 239 | [Dicee](239_Roll-the-Dice/) | Two-player dice game: refresh the page to roll both dice and see who wins. |
| 249 | [Simon Game](249_Simon%20Game/) | Simon memory game in jQuery: repeat the growing sequence of colours and sounds. |
| 255 | [Snake Game](255_snake%20game/) | Single-file Snake game on a canvas. |
| 263 | [Speed Typing Lite](263_Speed%20Typing%20Game/) | Type the displayed words before the timer runs out. |
| 273 | [Tic Tac Toe](273_TicTacToe/) | Two-player Tic Tac Toe with win detection. |
| 289 | [Wordle Clone](289_Wordle_Clone/) | Wordle: guess the five-letter word in six tries, with a built-in dictionary. |
| 291 | [Fall Game](291_ball%20game/) | Endless faller: steer the ball left and right with the arrow keys through gaps in rising blocks. |
| 302 | [Typing Speed Test](302_Typing-Speed-test%20app/) | Timed typing test that reports your speed in words per minute. Original live demo: https://typing-speed-testbysudeep.netlify.app/ |

## Tools & Apps

| # | Project | Description |
|---|---|---|
| 8 | [Resume Builder](8_builder/) | Form-driven resume builder. Fill in your details and pick a theme (blue, grey, resume) to render a styled CV. Uses Bootstrap and jQuery. |
| 10 | [Calculator](10_Calculator/) | Basic calculator with a button grid for arithmetic, clear and delete. |
| 17 | [Alarm Clock](17_Clock/) | Digital clock with an alarm: pick hour, minute and AM/PM, and a ringtone plays when the time is reached. |
| 19 | [Online Code Editor](19_Code%20Editor/) | Mini CodePen: three panes for HTML, CSS and JS whose output renders live in an iframe. |
| 26 | [Custom Video Player](26_custom-video-player/) | HTML5 video player with custom controls (play/pause, progress, volume) replacing the browser defaults. |
| 29 | [File Downloader](29_Downloader/) | Paste a file URL and download it directly from the browser using `fetch` and a Blob link. |
| 31 | [Drawing App](31_Drawing%20App/) | Canvas drawing app with brush, eraser, shapes (rectangle, circle, triangle), colour picker, brush size, clear and save-as-image. |
| 35 | [Image Editor](35_Editor/) | Easy image editor: adjust brightness, saturation, inversion and grayscale, rotate and flip, then save the edited image. |
| 36 | [Save Text As File](36_extention%29/) | Type text, choose a file name and type (.txt, .js, .html, ...) and download it as a file. |
| 40 | [QR Code Generator](40_generator/) | Type text or a URL and generate a QR code using the `qrcode.js` library. |
| 44 | [Form Validation](44_in%20javascript/) | Signup form with client-side validation of name, email and password in JavaScript, with inline error messages. |
| 49 | [Task List 2024](49_list/) | To-do list for adding, completing and deleting tasks. |
| 50 | [Dynamic Todo List](50_list%20app/) | Todo list with add, edit, delete and filtering (all / pending / completed). |
| 54 | [Meme Generator](54_Meme-Generator/) | Upload an image, add top and bottom text, and produce a meme on a canvas. |
| 56 | [Notes App](56_Note-App/) | Sticky-notes app: add, edit and delete notes with title and description, saved in `localStorage`. |
| 57 | [Notes App (modular)](57_notes-app/) | Notes app split into small modules (`note.js`, `note-dom-helper.js`) that create and remove notes in the DOM. |
| 60 | [Note Pad](60_Pad/) | Bootstrap note pad: add notes as cards and delete them, stored in `localStorage`. |
| 62 | [Blogs Panel](62_Panel%29/) | Blog page that lists posts and lets you write new ones, using Bootstrap and Firebase for storage. |
| 63 | [Password Generator](63_Password%20Generator/) | Generate random secure passwords with one click. |
| 64 | [Playable Piano](64_Playable-Piano/) | Piano keyboard you can play with the mouse or the computer keyboard, with volume control and toggleable key labels. |
| 65 | [Music Player](65_Player/) | Music player with play/pause, next/previous, progress bar, repeat/shuffle and a playlist. |
| 75 | [QR Code Generator (Code Traversal)](75_Reader/) | Generate a QR code from text or a URL with `qrcode.js`. |
| 76 | [Image Resizer](76_Resizer/) | Upload an image, change its width and height (optionally locking the aspect ratio), reduce quality and download. |
| 85 | [Text to Speech](85_Speak%20Converter/) | Type text and have the browser read it aloud using the Web Speech API (`speechSynthesis`). |
| 97 | [Budget App](97_Budget%20App/) | Enter a budget and add expenses; the app tracks the total spent and remaining balance. |
| 98 | [Sorting Visualizer](98_Visualizer/) | Animated sorting-algorithm visualiser with pages for bubble, insertion, selection, merge, quick and heap sort, highlighting swaps and comparisons. |
| 103 | [Pomodoro Timer](103_webapp/) | Pomodoro focus timer with start, pause and reset. |
| 106 | [Text to Speech Converter](106_Word%20Convertor/) | Convert typed text to speech with pause and resume, using the Web Speech API. |
| 108 | [Contact Directory](108_Contact%20Directory/) | Add contacts with name, phone and email and see them in a contact list. |
| 112 | [Unit Converter](112_Convert/) | Convert between units of length, mass, temperature, time and more; both input fields update live. |
| 113 | [Countdown Timer](113_Countdown-Timer/) | Countdown timer: set hours, minutes and seconds with range sliders, then start (Space), pause (P) and stop (X) from the keyboard or the on-screen buttons. |
| 134 | [Disk Scheduling Algorithms](134_DiskSchedulingAlgorithms/) | Visualises disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN) as head-movement charts with CanvasJS, with theory notes. |
| 135 | [Drawing Pad](135_Drawing%20pad/) | Freehand drawing pad on a canvas. Open `draw.html`. |
| 143 | [E-Levy Calculator](143_E-Levy-Calculator/) | Calculates Ghana's electronic transfer levy (E-Levy) on a mobile-money amount. |
| 146 | [Email Client App](146_Email-Client-App/) | Small mobile-style app (App.js + Zepto) with screens to compose and "send" an email; the recipient is remembered in `localStorage`. |
| 168 | [Background Gradient Generator](168_Gradient-generator/) | Pick two colours to create a linear-gradient background and copy the CSS. Open `bggenerator.html`. |
| 179 | [jsPDF with Custom Font](179_jsPDF%20with%20Custom%20font/) | Demo of generating a PDF in the browser with jsPDF using an embedded custom font. Open `demo.html`. |
| 189 | [Math Bot](189_Mathbot/) | Chat-style bot that evaluates math expressions with math.js. |
| 191 | [MDown Editor](191_mdown-editor/) | Markdown editor playground with a live HTML preview. |
| 195 | [Convert Me](195_Metrics%20Calculator/) | Engineering unit converter with pages for current, capacitance, length, resistance and temperature. |
| 202 | [NASA View Picker](202_NASA%20Background%20Picker/) | Pick a NASA space image (nebula, galaxy clusters, star fields) and it becomes the background behind a cockpit window. |
| 209 | [Palindrome Checker](209_palindrome%20site/) | Enter a word or phrase to check whether it is a palindrome. |
| 211 | [Password Generator](211_Password%20Generator/) | Single-file random password generator. Open `pass.html`. |
| 226 | [Random Color Flipper](226_Random%20Color%20Flipper/) | Click to set a random background colour and show its hex code. |
| 227 | [Random Color Generator](227_random%20color%20generator/) | Sets a random hex colour as the background, shows the code and lets you copy it. |
| 230 | [Random Color Generator](230_Random-color-Generator/) | Changes the background to a random colour and plays a sound. |
| 232 | [Registration Page](232_Registration%20page/) | Registration form that saves details and shows them on a separate display page. |
| 251 | [Simple Todo](251_simple-todo/) | Single-file todo list. |
| 262 | [Speech To Text](262_Speech%20To%20Text/) | Dictation: speak into the microphone and the text appears on screen, using the Web Speech API (`SpeechRecognition`). |
| 272 | [Text Utils](272_TextUtils/) | Paste text to get a summary (words, characters, reading time) and a preview, with case conversion. |
| 274 | [Timer App](274_Timer%20App/) | Countdown timer with start and pause, written with a `Timer` class. |
| 277 | [To Do Task List](277_To-do%20list%20Web%20App/) | Task list with add, edit, delete and filters. A second variant is in `todo2.html`. |
| 278 | [To-do List](278_to-do_list/) | To-do list with add and remove. |
| 282 | [VAT Calculator](282_VAT%20Calculator/) | Calculate VAT and gross price from a net amount and rate. |
| 292 | [Calculator](292_calculator2/) | Calculator with keyboard-style layout. |
| 295 | [Internet Connection Status](295_Connection%20Status/) | Shows a toast when the browser goes offline or back online (`online`/`offline` events). |
| 297 | [COVID-19 Screening Tool](297_jQuery/) | COVID-19 self-screening questionnaire built with Bootstrap and jQuery. |
| 298 | [Stopwatch](298_Stop%20watch/) | Stopwatch with start, stop and reset (CodingLab). |
| 306 | [Web Chat App](306_web-chat-app/) | Chat UI built from vanilla Web Components (brand, authed user, chat message) with random users from randomuser.me. |

## API-Powered Apps

| # | Project | Description |
|---|---|---|
| 28 | [Dictionary App](28_Dictionary%20App/) | Look up any English word to get its meaning, phonetics, example and synonyms, with pronunciation audio. Uses the Free Dictionary API. |
| 45 | [Random Jokes Generator](45_Joke_Generator/) | Click a button to fetch a random dad joke from the icanhazdadjoke API. |
| 52 | [Lovely Movies](52_lovely-movies/) | Search movies by title and see posters and details from the OMDb API. Requires an OMDb API key in `scripts/services.js`. |
| 69 | [GitHub Profile Finder](69_profile/) | Enter a GitHub username to show the user's profile card using the GitHub REST API. |
| 71 | [Random Quote Generator](71_Qoute%20Generator/) | Fetch a random quote from the Quotable API, with text-to-speech, copy and share-on-Twitter buttons. |
| 93 | [Language Translator](93_Translator/) | Translate text between 100+ languages using the MyMemory translation API, with copy and speak buttons. |
| 100 | [Weather App](100_Weather%20App/) | Search a city to see the current temperature, humidity and wind from the OpenWeatherMap API. Requires an API key in `script.js`. |
| 128 | [Current Weather](128_CurrentWeather/) | Shows the weather for your current location using browser geolocation and the OpenWeatherMap API. |
| 165 | [GitHub Profile Search](165_Github%20profile%20search/) | Search a GitHub username and see avatar, bio, followers and repos via the GitHub API. |
| 176 | [Random Joke Generator](176_joke-generator/) | Fetch random jokes from JokeAPI (v2.jokeapi.dev). |
| 222 | [QR Code Scanner](222_QR%20Code%20Scanner/) | Upload an image of a QR code and decode it using the goqr.me (api.qrserver.com) API. |
| 224 | [Quote Generator (jQuery)](224_quote%20generator/) | Random quote machine with jQuery; quotes come from a GitHub gist and can be tweeted. By Yohannes Sida. |
| 225 | [Quote Generator](225_Quote-generator/) | Random quotes from the type.fit API with a local fallback list and a tweet button. |
| 229 | [Random Quote Generator](229_Random%20Quote%20Generator/) | New quote from the Quotable API on every click, with read-aloud, copy-to-clipboard and tweet buttons. |
| 244 | [GitHub Search](244_search/) | Search GitHub users through the GitHub API. |
| 247 | [Short Links](247_shortLink/) | URL shortener using the Rebrandly API via jQuery. Requires a Rebrandly API key in `js/app.js`. |
| 280 | [TV Show Search](280_TV-show%20Search%20app/) | Search TV shows and see their posters using the TVmaze API with axios. |
| 284 | [Weather App](284_Weather%20App/) | City weather search with the OpenWeatherMap API. Requires an API key in `script.js`. |
| 286 | [DevFinder](286_webpage-using-api/) | GitHub user search (DevFinder) showing repos, followers, location and links via the GitHub API. |
| 305 | [Weather App v1](305_v_1/) | Weather card for a searched city using the OpenWeatherMap API. Requires an API key in `script.js`. |

## Websites & Landing Pages

| # | Project | Description |
|---|---|---|
| 1 | [Crappo](1_-crappo/) | Landing page for a fictional crypto investment platform ("Fastest & secure platform to invest in crypto") with hero, stats, features and pricing sections. |
| 6 | [Trading App UI](6_App/) | Dashboard UI for a trading app with Bootstrap layout and CanvasJS price charts driven by sample data. |
| 20 | [GO GREEN IT Company Template](20_Company-Portfolio/) | Multi-page business website template for a software company: home, about, services, portfolio, pricing and contact pages. |
| 22 | [Frontend Bootcamp](22_COURSE_WEBSITE/) | Landing page for a web-development course ("Become a Web Developer") built with Bootstrap 5 and Bootstrap Icons. |
| 34 | [Thrift-Flip Store](34_Ecommerce-site/) | Front-end of an e-commerce page for a clothing store (new arrivals, 2022 collection) built with W3.CSS and Font Awesome. |
| 38 | [Zacson Gym Template](38_Fitness%20Website/) | Multi-page gym and fitness trainer template: home, about, courses, pricing, blog and contact (the contact form posts to a PHP handler). |
| 42 | [Luxe Hotel Template](42_Hotel%20Website/) | Free responsive HTML5 hotel template by FREEHTML5.co: hotel listings, services, blog and contact pages. |
| 61 | [Black VPN Landing Page](61_page/) | Landing page for a VPN service with features, testimonials and download buttons for Apple and Android. Built with Bootstrap. |
| 68 | [Portfolio Website (Karan Nath)](68_Portfolio%20website/) | Personal portfolio with about, skills, projects and contact sections and a typing animation via Typed.js. |
| 78 | [Restaurant Website](78_Restaurant%20Website/) | Food-ordering website with home, categories, category foods and an order form page. |
| 80 | [Concert Project](80_SAMPLE/) | Concert/event landing page with separate stylesheets for phone layouts. |
| 83 | [Book Zone](83_Site/) | Online bookstore front-end: home with featured products and brands, product listing, about, login and register pages. |
| 95 | [Sid's Tennis Classes](95_Bootstrap%20website/) | Bootstrap 3 site for tennis classes with a separate vertical form page. |
| 104 | [Art Blog / Portfolio](104_Website/) | Multi-page artist site: home, about, gallery, exhibitions, portfolio and blog pages under `public/`. |
| 109 | [Ristorante Con Fusion](109_contact%20page/) | "About us" page for the fictional Ristorante con Fusion, built with Bootstrap 4 (from the Coursera Bootstrap course). |
| 114 | [Cricket](114_cricket/) | Three-page site about cricket (the game, champions, records) made before the ICC T20 World Cup 2022. |
| 123 | [Bugsy Portfolio](123_css-7/) | One-page personal portfolio (about, services, work, contact) with a Swiper carousel and LineIcons. |
| 131 | [Softy Pinko Landing Page](131_Digital%20Marketing%20Landing%20Page/) | Digital-marketing landing page based on the Softy Pinko Bootstrap 4 theme from TemplateMo. |
| 141 | [Furnish Furniture Template](141_dynamic-page/) | Furniture and decor website template with Bootstrap, Magnific Popup and animations. |
| 142 | [Anime Poster Store](142_e-commerce/) | E-commerce landing page for anime posters with featured and latest products. |
| 145 | [EduFord University](145_eduford%20uni/) | University website with home, about, courses, blog and contact pages. |
| 147 | [Intro to Open Source Event](147_Event/) | Event page for an "Introduction to Open Source" session with speakers and date, animated with AOS. |
| 154 | [Flower Shop Website](154_flowershop_website/) | Responsive flower-shop site with home, about, products, reviews and contact sections. |
| 155 | [Fluid Web Page](155_fluid-webpage/) | Fluid, responsive page about bungee jumping in Nepal. Open `Fluid-Webpage/index.html`. |
| 157 | [MyOnlineMeal](157_Food%20Delivery%20Website/) | Food-delivery website with services, food ordering and client sections, plus a phone stylesheet. |
| 169 | [Singh Fitness](169_Gym-Website/) | Single-page gym website ("Join India's Best Gym Now") with a contact form. |
| 174 | [VJS Jewelers](174_Jewelery%20Blog%20website/) | Jewellery shop website (Verma Ji & Sons) with home, about, gallery, services and contact pages. |
| 180 | [KickStart](180_KickStart/) | Landing page for a skills/employability course platform, animated with AOS. |
| 181 | [Learning Landing Page](181_landing-page/) | Landing page for learning web development with a learning section and embedded video. |
| 183 | [Linguistic Center](183_Linguistic%20Academy/) | Website for a language institute. Course data is loaded from `lang.json` and a public JSON API. The Figma design is in `Design/`. |
| 198 | [Music Store](198_Music-Store/) | Music store page with Bootstrap cards and a small cart script. |
| 199 | [Portfolio (Riya Garg)](199_my%20Portfolio/) | Personal portfolio with intro, about and skills sections. |
| 218 | [INFINITY vCard Template](218_Portfolio%20using%20HTML/) | vCard / resume / CV portfolio template with portfolio, resume and contact sections. |
| 233 | [AirCnC: Rent a Cat or Dog](233_rentMyDog%20Responsive%20website/) | Responsive listing site for renting pets, with owner cards and prices. |
| 234 | [Responsive Bootstrap 5 Website](234_Responsive%20Bootstrap%20Website/) | Four-page Bootstrap 5 site: home, about, gallery and contact. |
| 248 | [Shruti Verma Portfolio](248_shruti-verma/) | Personal portfolio page for Shruti Verma. |
| 258 | [Solartec](258_Solar%20Company%20Website/) | Solar and renewable-energy company website with Bootstrap. Open `Solartec company.html`. |
| 259 | [Solartec 2022](259_Solar2022/) | Later copy of the Solartec site with images moved into `images/`. Open `Solartec Company.html`. |
| 261 | [Space Tourism Website](261_spacetourismwebsite/) | Frontend Mentor challenge: multi-page space tourism site (home, destination, crew, technology) with data from `data.json`. |
| 265 | [Startup Landing Page](265_Startup%20Landing%20Page/) | Startup landing template with ScrollReveal and anime.js animations. Sources in `src/`, built files in `dist/`. |
| 275 | [TinDog](275_TinDog/) | "Tinder for dogs" Bootstrap landing page with features, testimonials, pricing and press logos. |
| 276 | [TinDog + Bootstrap Exercises](276_TinDog%20Website%20%5BHTML%20%2B%20CSS%20%2B%20Bootstrap%5D/) | Another TinDog Bootstrap landing page, plus smaller Bootstrap exercises (little portfolio, form, carousel). |
| 279 | [Kishore Kumar Tribute](279_Tribute-Page/) | Tribute page about the singer Kishore Kumar. |
| 283 | [Watch Store](283_watch-store/) | Responsive watch e-commerce site with cart, featured products and Swiper sliders (Bedimcode design). Open `assets/index.html`. |
| 300 | [BuildCon](300_System/) | Construction company website with services and projects, built with Bootstrap 5. |
| 301 | [Game of Thrones Wiki](301_Thrones/) | Mini wiki page for Game of Thrones in plain HTML and CSS. |
| 307 | [My Online Meals](307_website/) | Food-catering website, a variant of the MyOnlineMeal design. |

## Clones

| # | Project | Description |
|---|---|---|
| 18 | [Twitter Clone (markup)](18_Clone/) | Static HTML/CSS recreation of the Twitter home timeline, split into BEM-style CSS blocks (sidebar menu, tweet, trends, who-to-follow). |
| 105 | [WhatsApp Web Clone](105_Whatsapp%20Clone/) | Static recreation of the WhatsApp Web chat interface (chat list and conversation pane). |
| 152 | [Flipkart Clone](152_Flipkart%20clone/) | Static recreation of the Flipkart home page with deals sections. |
| 192 | [MediaBook](192_mediabook/) | Facebook clone rebranded as MediaBook, built with HTML and CSS only. |
| 200 | [Myntra Clone](200_Myntra-Clone-main/) | Static recreation of the Myntra fashion store home page. |
| 264 | [Spotify Clone](264_Spotify/) | Spotify-style music player with a playlist of no-copyright songs, progress bar and controls. |
| 290 | [YouTube Clone](290_Youtube-Clone/) | YouTube web UI clone styled with Tailwind CSS. |
| 293 | [Windows 11 Clone](293_Clone/) | Windows 11 desktop recreation with boot video, taskbar and start menu. |

## UI Components & CSS Effects

| # | Project | Description |
|---|---|---|
| 3 | [404 Error Pages](3_404-error/) | Collection of three Tailwind CSS 404 page designs: a simple error, a 404 with footer and a centred 404. `index.html` links to each demo. |
| 5 | [Happy Birthday Wish](5_animation/) | Animated birthday greeting card built with CSS animations and a small script. |
| 9 | [Dynamic Calendar](9_Calander/) | Month calendar that renders the current month and lets you step backwards and forwards between months, with today highlighted. |
| 11 | [Candle Animation](11_candel%20animation/) | Realistic flickering candle built purely with CSS gradients and keyframe animations. |
| 12 | [Canvas Wallpaper](12_canvas-wallpaper/) | Animated wallpaper drawn on an HTML `<canvas>`: moving circles rendered with a small `Circle` class and `requestAnimationFrame`. |
| 14 | [Login / Register Card](14_card/) | Flip card with a login form on one side and a registration form on the other. |
| 23 | [Flipping Credit Card](23_cradit-card%20animation/) | Credit card UI that flips on hover to show the back, built with CSS 3D transforms. |
| 24 | [Login Form](24_css/) | Simple styled login form with a background image. |
| 25 | [CSS Escape Loading Animation](25_css-escape-loading-animation/) | Pure CSS loading animation. |
| 27 | [Admin Dashboard Panel](27_Dashboard/) | Responsive admin dashboard with a collapsible sidebar, dark-mode toggle, stat cards and an activity table. |
| 32 | [Custom Dropdown List](32_dropdown%20list/) | Custom-styled dropdown select built with HTML, CSS and a little JavaScript. |
| 37 | [Drag & Drop File Upload](37_file/) | Drag-and-drop (or browse) image upload area that previews the selected image. |
| 43 | [Social Icons](43_icons/) | Row of social-media icon links with hover effects, using Font Awesome. |
| 48 | [Link Shortener](48_Link-Shorten-Website/) | Front-end mock-up of a URL-shortener page. Shortening is simulated in JavaScript; there is no real backend. |
| 51 | [Glowing Gradient Loader](51_loader%20animation/) | Animated glowing gradient spinner made with CSS only. |
| 58 | [Registration Form](58_Online-Form/) | Styled registration form built with HTML and CSS. |
| 77 | [Responsive Font Size](77_responsive-font-size/) | Demo of fluid typography using CSS `min()` and `max()`. |
| 81 | [FAQ Section](81_Section/) | Frequently-asked-questions accordion built with Bootstrap collapse. |
| 82 | [Simple Range Slider](82_simple-range-slider/) | Horizontal and vertical range slider component written as a small reusable script. |
| 87 | [Split Screen](87_split-screen/) | Split-screen landing layout ("blue is depth / black is power") where the hovered half expands. |
| 88 | [Analog Clock](88_Analog%20clock/) | Analog clock face drawn with CSS. |
| 89 | [Analog Watch](89_Analog%20Watch/) | Analog watch whose hands are rotated every second by JavaScript. Open `hp11.html`. |
| 92 | [2D Transformations](92_Transformation/) | Demo of CSS 2D transforms: translate, rotate, scale and skew. |
| 94 | [Background Changer](94_bgChanger/) | Changes the page background colour from JavaScript. |
| 99 | [Analog Clock](99_Watch/) | Analog clock with a dark/light mode toggle, driven by JavaScript. |
| 102 | [Car Animation](102_car-animation/) | Animated car driving along a road with spinning wheels, a scrolling background and engine sound. |
| 107 | [Contact Card](107_Contact%20Card/) | Single contact/profile card with social icons. |
| 110 | [Contact Us Form](110_Contact%20us%20form/) | Styled contact-us form. Open `login.html`. |
| 111 | [Contact Form](111_ContactForm/) | Simple contact form with HTML and CSS. |
| 126 | [CSS Adjuster](126_CSS-Adjuster/) | Adjust spacing, blur and colour of an image with sliders that update scoped CSS variables from JavaScript. |
| 127 | [Hacktober Animation](127_CSS-JS%20Hybrid%20Animation/) | Animated text and shapes made with CSS plus JavaScript, originally a Hacktoberfest challenge entry. |
| 130 | [Credit Card Design](130_Debit%20Card/) | Glassy credit/debit card design made with HTML and CSS. |
| 132 | [Digital Watch](132_digital-clock/) | Digital clock showing the current time, updated every second. |
| 133 | [Digital Clock](133_digitalClock/) | Styled digital clock driven by JavaScript. |
| 136 | [Drop Down Menu](136_Drop%20Down%20Menu/) | Navigation bar with a hover dropdown menu in pure CSS. |
| 144 | [E-commerce Product Page](144_ecommerce-product-page/) | Frontend Mentor challenge: sneaker product page with image gallery, quantity picker and cart. Styled with SCSS and Bootstrap. |
| 148 | [Expenses Chart Component](148_expenses-chart-component-main/) | Frontend Mentor challenge: weekly spending bar chart rendered from `data.json`. |
| 149 | [Moving Eyes](149_Eyes%20Moving/) | A pair of eyes whose pupils follow the mouse cursor. |
| 150 | [Neon Buttons](150_Fancy-Buttons/) | Neon glow button hover effects using CSS transitions. |
| 156 | [Flying Bird Animation](156_Flying%20Bird%20Animation/) | Birds flying across a sky using CSS sprite animation. Open `index.htm`. |
| 160 | [Image Gallery](160_Gallery/) | "Life in the wild" photo gallery laid out with CSS. |
| 161 | [Gallery Website](161_gallery-website/) | Photo gallery with a lightbox powered by PhotoSwipe. |
| 167 | [Glassmorphism Calendar](167_glassmorphism-calendar/) | Glassmorphism calendar card using dycalendar.js, with a 3D tilt effect from vanilla-tilt.js. |
| 170 | [Hover Effect](170_Hover%20effect/) | Hover effect written in Pug with CSS and JS (CodePen export). Compile `index.pug` to HTML to run it. |
| 173 | [Eyes That Follow](173_javascript%20eyes/) | Cartoon eyes that follow the mouse. Open `eyes-that-follow.html`. |
| 175 | [Job Application Form](175_Job%20Application/) | Styled job application form. |
| 184 | [Loading Screen](184_Loading%20Screen/) | Full-page CSS loading screen animation. |
| 185 | [Create Account Form](185_Login%20Form/) | Account-creation form with icons and a JavaScript show/hide password toggle. |
| 186 | [Animated Login Form](186_loginPage/) | Login form with animated borders and inputs. |
| 197 | [Multilevel Dropdown](197_Multilevel%20dropdown/) | Navigation menu with nested multi-level dropdowns in pure CSS. |
| 204 | [NFT Preview Card](204_nft-preview-card-component/) | Frontend Mentor challenge: NFT preview card component in HTML and CSS. |
| 210 | [Parallax Website](210_parallax-website/) | Demo of parallax scrolling sections with fixed backgrounds. |
| 212 | [Payment Form](212_Payment-Form/) | Checkout form with contact and card payment fields. Open `payment_form.html`. |
| 219 | [Perfume Product Page](219_productpage/) | Product card for a perfume with price and buy button, built with Bootstrap. |
| 220 | [Profile Cards](220_Profile%20Cards/) | Profile cards with a JavaScript interaction. |
| 221 | [Neumorphism Profile Card Slider](221_ProfileCardsWithSlider/) | Neumorphic profile cards in a slider. |
| 237 | [Review Cards](237_Review%20Cards/) | Testimonial slider with previous, next and random buttons. |
| 240 | [Rotating Image Gallery](240_Rotating%20Image%20Gallary/) | 3D rotating image carousel with previous and next buttons. |
| 242 | [Scroll Two Divs in Parallel](242_Scroll%20Two%20Div%20Parallel/) | Two scrollable panes whose scroll positions stay in sync. |
| 243 | [Fixed-Size Scrollable Box](243_Scrollable%20Fixed%20Size%20Box/) | Fixed-size box with overflowing scrollable content. |
| 245 | [Search Bar](245_Search%20Bar/) | Styled search bar. Open `search_bar.html`. |
| 246 | [3D Shapes](246_SHAPES/) | Cone, cube, cylinder, sphere and half-sphere drawn in CSS, one stylesheet per shape. |
| 250 | [Simple List](250_Simple-list/) | Displays a random list of text items. |
| 252 | [Simple Dark Mode](252_simpleDarkmode/) | Bootstrap gallery page with a dark-mode toggle from darkmode.js. Open `ex.html`. |
| 253 | [Skill Slider](253_Skill%20Slider%20Frontend/) | Scroll-driven image/section slider (SCSS source; compile `style.scss` to CSS first). |
| 254 | [Slide-Out Gallery](254_Slide%20out%20Gallery/) | Frontend/backend panels that slide out on hover. |
| 256 | [Social Links Profile](256_social-links-profile-main/) | Frontend Mentor challenge: social links profile card using the Inter font. |
| 281 | [Twitter Logo in CSS](281_twitterLogoCssOnly/) | The Twitter bird logo drawn with CSS only. |
| 294 | [PVG College Dashboard](294_College%20Dashboard/) | College dashboard layout with Bootstrap and charts.css. |
| 296 | [Expanding Search Form](296_Form/) | Search box that expands when the button is clicked and submits on the second click. |
| 303 | [Contact Us Page](303_Us/) | Single-file contact-us page with Font Awesome icons. |
| 308 | [Animated Clock](308_Animated_Clock/) | Animated analog clock. Open `watch.html`. |

## Framework & Full-Stack Apps

| # | Project | Description |
|---|---|---|
| 129 | [Daily Journal](129_Daily-Journal/) | Blog-style daily journal built with Node.js, Express and EJS templates: compose posts, read each one at `/posts/<title>`, plus About and Contact pages. Posts live in memory. |
| 163 | [GERICHT Restaurant](163_GERICHT/) | React landing page for a fine-dining restaurant (menu, chef, awards, gallery) built with Create React App and React Bootstrap. |
| 164 | [Get Random Advice](164_Get%20Random%20Advice/) | React app that fetches a random piece of advice from the Advice Slip API with axios. |
| 194 | [Memory Game (React + TS)](194_memory-game-react/) | Memory card game in React and TypeScript that loads character cards from the Rick and Morty GraphQL API via Apollo Client. |
| 207 | [Oceanus](207_oceanus/) | Next.js site styled with Tailwind CSS, using Swiper carousels and React Icons. |
| 235 | [Restaurant Website (React)](235_Resturant_Website/) | Restaurant website in React (Create React App) with React Icons, deployable to GitHub Pages via `npm run deploy`. |
| 257 | [ChatCord](257_Socket%20IO%20Chat%20App/) | Real-time chat with rooms built on Node.js, Express and Socket.IO, using the Redis adapter to share state. |
| 266 | [Stopwatch (React)](266_STOPWATCH/) | Stopwatch in React (Create React App) with start, stop and reset. |
| 267 | [Students Room](267_students-room/) | Check-in/check-out app for the University of Calabria (Unical) CS and Maths students' room. Svelte + TypeScript + Vite + Tailwind with Firebase. |
| 269 | [Text Converter (React)](269_Text%20converter/) | React text utility app (uppercase, lowercase, clear, word count) in `newapp-master/`. |
| 271 | [TextUtils (React)](271_textUtil-TextEditor-with-React-master/) | React text editor with case conversion, word/character count and dark mode. |

## Python Scripts

| # | Project | Description |
|---|---|---|
| 96 | [PyQt5 Web Browser](96_Browser/) | Minimal desktop web browser written in Python with PyQt5 and QtWebEngine: back, forward, reload, home and a URL bar. |
| 213 | [PDF Password Opener](213_PDF%20Password%20Opener/) | Recovers the password of your own locked PDF by trying each entry of a wordlist with `pikepdf`. |
| 241 | [Screen Recorder](241_Screen%20Recorder/) | Records the screen to a timestamped MP4 with a webcam overlay using Pillow, OpenCV and NumPy. Windows only (uses `win32api`). |

## Learning Exercises

| # | Project | Description |
|---|---|---|
| 70 | [Name Display](70_Project/) | Small DOM exercise: type a name and press Enter or the button to display it in capitals (defaults to "GAURAV"). |
| 115 | [CSS Practice 1](115_css-1/) | Basic web page used to practise CSS styling. |
| 116 | [CSS Cursor Styles](116_css-10/) | Reference page showing every CSS `cursor` value you can hover over. |
| 117 | [CSS Animation Timing Functions](117_css-11/) | Side-by-side comparison of CSS `animation-timing-function` values (ease, linear, ease-in, ...). |
| 118 | [CSS Tour: Font Family](118_css-2/) | Exercise on CSS `font-family`. |
| 119 | [CSS Tour: Margin & Border](119_css-3/) | Exercise on CSS margins and borders. |
| 120 | [CSS Tour: Background Image](120_css-4/) | Exercise on CSS background images. |
| 121 | [CSS Tour: Text Decoration](121_css-5/) | Exercise on CSS text decoration. |
| 122 | [CSS Tour: Pseudo-states](122_css-6/) | Exercise on CSS pseudo-classes such as `:hover` and `:active`. |
| 124 | [Padding in CSS](124_css-8/) | Explainer page on CSS padding: what it is, its effects and where it is useful. |
| 125 | [Borders and Margins in CSS](125_css-9/) | Explainer page describing CSS borders and margins. |
| 171 | [HTML Basics](171_html/) | Collection of HTML exercises: headings, tables, forms, login and survey forms, video embedding, meta tags and a coin toss. |
| 172 | [JavaScript Exercises](172_javascript/) | JavaScript exercises: triangle checker, auto colour change, and a calculator with basic and scientific operations in `js-calculator/`. |
| 177 | [jQuery Exercises](177_jQuery/) | jQuery practice: email validation, event handling and selecting multiple targets, each in its own folder. |
| 178 | [ANN Mobile Page](178_JQuery%20web%20app/) | Mobile page about artificial neural networks. Open `mobile.html`. |
| 187 | [Product Page + JS Practice](187_main/) | Bootstrap product page plus `app.js` with beginner JavaScript array and object exercises. |
| 214 | [Getting Started with PHP](214_php-1/) | Minimal "Hello World" PHP snippet embedded in HTML. Needs a PHP server to run. |
| 268 | [SVG Examples](268_svg/) | Examples of inline SVG shapes. |
| 287 | [Same Page, Different Stylesheets](287_Website%20designs/) | One HTML page styled by several different stylesheets to show how CSS changes a design. |
| 299 | [Random Number with localStorage](299_storage/) | Generates a random number and remembers it in `localStorage` across reloads, with staggered reveal animations. |

## Empty / Placeholder

These folders have no runnable code. The first ten are **broken submodule links**: git records a submodule commit for them, but the repository has no `.gitmodules` file, so their contents were never included and cannot be checked out. To restore one, re-add the original repository with `git submodule add <url> "<folder>"` or copy its files in directly.

| # | Project | Description |
|---|---|---|
| 4 | AI | Empty submodule link (no source in this repo). |
| 15 | Chatify | Empty submodule link (no source in this repo). |
| 33 | E-Learning Website | Empty submodule link (no source in this repo). |
| 41 | Grand Theatre | Empty submodule link (no source in this repo). |
| 53 | Management | Empty submodule link (no source in this repo). |
| 55 | NFT-Based E-Commerce Website | Empty submodule link (no source in this repo). |
| 66 | Portal Management | Empty submodule link (no source in this repo). |
| 67 | Portfolio | Empty submodule link (no source in this repo). |
| 91 | Tourism Website | Empty submodule link (no source in this repo). |
| 304 | Vendor Management System | Empty submodule link (no source in this repo). |
| 7 | [Audio Converter](7_Audio%20Converter/) | Placeholder page. The only content is the text "Will be Added"; no converter is implemented yet. |
| 158 | [Frontend Projects](158_Frontend-Projects/) | Contains only an empty file named `Analog clock`; there is no project code here. |

## Notes

- **API keys:** [Lovely Movies](52_lovely-movies/), [Weather App](100_Weather%20App/), [Current Weather](128_CurrentWeather/), [Weather App](284_Weather%20App/), [Weather App v1](305_v_1/), [Short Links](247_shortLink/) call APIs that need your own free key (OpenWeatherMap, OMDb or Rebrandly). Put it in the project's script before running.
- **Needs a server or build step:** [Daily Journal](129_Daily-Journal/), [GERICHT Restaurant](163_GERICHT/), [Get Random Advice](164_Get%20Random%20Advice/), [Restaurant Website (React)](235_Resturant_Website/), [Stopwatch (React)](266_STOPWATCH/), [TextUtils (React)](271_textUtil-TextEditor-with-React-master/), [Memory Game (React + TS)](194_memory-game-react/), [Text Converter (React)](269_Text%20converter/), [Oceanus](207_oceanus/), [ChatCord](257_Socket%20IO%20Chat%20App/), [Students Room](267_students-room/), [PyQt5 Web Browser](96_Browser/), [PDF Password Opener](213_PDF%20Password%20Opener/), [Screen Recorder](241_Screen%20Recorder/), [Getting Started with PHP](214_php-1/), [Hover Effect](170_Hover%20effect/), [Skill Slider](253_Skill%20Slider%20Frontend/), [YouTube Clone](290_Youtube-Clone/). The exact commands are in each README.
- **Near-duplicates:** the drum kit exists three times ([137](137_Drum%20kit/), [138](138_drum-kit/), [139](139_drumkit/)), Solartec twice ([258](258_Solar%20Company%20Website/), [259](259_Solar2022/)) and TinDog twice ([275](275_TinDog/), [276](276_TinDog%20Website%20%5BHTML%20%2B%20CSS%20%2B%20Bootstrap%5D/)). There are also several clocks, quote generators, weather apps and to-do lists built in different ways.
- **Numbering gaps:** there are no folders numbered 101, 151, 153, 159, 162, 166, 182, 188, 201, 203, 205, 206, 215, 216, 217, 228, 231, 236, 260, 270, 285, 288.

## Contributing

1. Fork the repo and create a branch.
2. Add your project as a new folder named `<next number>_<Project Name>`.
3. Include a `README.md` in the folder describing what it does and how to run it (copy the layout of any existing project README).
4. Add a row for it to the matching table above and open a pull request.

## License

Licensed under the [Apache License 2.0](LICENSE). Some folders are based on free third-party templates (for example FREEHTML5.co, TemplateMo, Frontend Mentor challenges and CodingNepal tutorials); their original credits are kept in the project files.

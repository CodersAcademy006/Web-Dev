# Students Room

Check-in/check-out app for the University of Calabria (Unical) CS and Maths students' room. Svelte + TypeScript + Vite + Tailwind with Firebase.

**Category:** Framework & Full-Stack Apps  
**Tech:** HTML, JavaScript, TypeScript, CSS, Svelte, Firebase, Tailwind CSS, Vite

## How to run

```bash
npm install
npm run dev
```

Vite prints the local URL. The Firebase project config lives in `src/lib/firebase.ts`; point it at your own Firebase project to use your own data.

## Files

```
index.html
package.json
postcss.config.cjs
svelte.config.js
tailwind.config.cjs
tsconfig.json
tsconfig.node.json
vite.config.ts
dist/index.html
dist/assets/index.61704bc0.js
dist/assets/index.c1f898a5.css
src/App.svelte
src/app.css
src/main.ts
src/vite-env.d.ts
src/lib/firebase.ts
src/lib/components/Button.svelte
src/lib/components/Form.svelte
src/lib/components/Input.svelte
src/lib/components/UserBar.svelte
src/lib/components/UserRow.svelte
src/lib/components/UsersTable.svelte
src/lib/consts/colors.ts
src/lib/consts/departments.ts
src/lib/consts/form_types.ts
src/lib/stores/auth.ts
```

Plus 4 asset files (images, audio, fonts, etc.).

## Original notes

### Unical Computer Science and Mathematics Students Room
Project created to have a check-in | check-out application to see who is actually inside the room.

#### Technologies
- Svelte (Frontend)
- Firebase (Backend as a Service)
- TailwindCSS (CSS)

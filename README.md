# MOLIM_S — Local dev instructions

This workspace was prepared with a minimal Vite + React TypeScript setup so you can run the app locally.

Prerequisites
- Node.js (LTS) and npm installed on your machine.

Install Node (Windows options)
- Official installer: https://nodejs.org/en/download/ (download the LTS installer and run it)
- winget (Windows 10/11):

```powershell
winget install OpenJS.NodeJS.LTS
```

- Chocolatey (if you use it):

```powershell
choco install nodejs-lts -y
```

Run the project (from project root `c:\Users\H-A\Desktop\molim\MOLIM_S`)

```powershell
# install dependencies
npm install

# start dev server
npm run dev
```

If you prefer `yarn` or `pnpm` install and use those instead.

Notes
- The global stylesheet `GLOBAL STYEL` now sets `html, body, #root { overflow: hidden; }` to enforce the app as a single-page no-scroll layout. The app root uses the `app-viewport` class (100vh/100vw) where internal scrolling is allowed.
- I created a small `src/App.tsx` that loads your `login` and `Home` pages using internal state-based navigation so the app behaves as an SPA without full-page navigations.
- I added lightweight stubs for missing local modules so the project parses, but the real npm packages (react, react-dom, etc.) must be installed for full functionality.

If you'd like, I can continue here after you install Node — I can run `npm install` and `npm run dev`, then fix any runtime errors that appear. If you want me to proceed immediately, confirm and I'll run the install and dev start commands.

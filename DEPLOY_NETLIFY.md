Netlify deployment guide

1. Connect your repository to Netlify.
2. Set the build command to `npm run build` and the publish directory to `dist` (this is the Vite default).
3. Optional: set environment variable `NODE_VERSION` to match the `engines.node` field (>=18).
4. If you want to preview locally with Netlify CLI, install it: `npm i -g netlify-cli` and run `netlify dev`.

Notes
- We added a `prebuild` script that runs `tsc --noEmit` to fail builds early on type errors.
- The `_redirects` file rewrites all routes to `index.html` so client-side routing works.
- The `netlify.toml` sets the build command and dev command for Netlify to use.
# Jennifer Nelson — Marketing Operations Portfolio

A dashboard-style portfolio site showcasing marketing operations, demand gen, and AEO/GEO work.

## Structure

```
/index.html      → main page
/css/styles.css   → all styling
/js/main.js       → sidebar nav scroll + active states
/assets/          → screenshots and images (add as needed)
```

## Running locally

Just open `index.html` in a browser, no build step required.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set Source to **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Save. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Adding new projects

Each project is a `.project-card` block in `index.html`. Copy an existing block, update the `id`, heading, description, and meta fields, then add a matching `.nav-item` in the sidebar with a `data-target` pointing to that `id`.

## Notes

- Font is set to `Calibri` with system fallbacks (`Segoe UI`, `Helvetica Neue`, `Arial`) since Calibri isn't a licensed web font — it will render as Calibri on Windows and fall back to a similar system sans elsewhere.
- Color tokens live at the top of `css/styles.css` under `:root` for easy palette changes.

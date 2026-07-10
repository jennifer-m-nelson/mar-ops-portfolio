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

## Adding GIFs to the Visual Walkthroughs section

1. Export your screen recording as a `.gif` (Storylane and most screen recorders can export directly, or use a tool like Gifski/CloudConvert to convert a screen recording).
2. Keep file size reasonable (under ~5MB ideally) so the page loads quickly. GitHub has a 100MB per-file limit, but smaller is always better for page speed.
3. Drop the file into `/assets/`, e.g. `assets/storylane-walkthrough.gif`.
4. In `index.html`, find the `.visual-card` blocks near the bottom and confirm the `<img src="assets/your-file.gif">` path matches your filename exactly (case-sensitive).
5. Commit and push as usual.

Two placeholder slots are already wired up:
- `assets/storylane-walkthrough.gif`
- `assets/hubspot-workflow-trial.gif`

Until real GIFs are added, these will show as broken image icons — that's expected and will resolve once the files are in place.


## Notes

- Font is set to `Calibri` with system fallbacks (`Segoe UI`, `Helvetica Neue`, `Arial`) since Calibri isn't a licensed web font — it will render as Calibri on Windows and fall back to a similar system sans elsewhere.
- Color tokens live at the top of `css/styles.css` under `:root` for easy palette changes.

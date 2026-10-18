# Dividend Income Calculator

Live site: https://nimrat1000.github.io/dividend-income-calculator/

## Shared banners and navigation
All five content pages show MakeForToday, CountYield, and FileFlipHub banners beneath their introduction, followed by links to all five calculator/guide pages. Desktop banners share one row; narrow screens stack the cards. External sites open in new tabs.

Change `partials/site-banners.html` once to update the links/text across every page. `assets/site-banners.js` loads that shared file, marks the current page in navigation, and preserves the initial HTML if loading fails. `assets/site-banners.css` controls the shared appearance. Each existing page includes static fallback markup so its banners and links still work without JavaScript.

## Future pages
Copy `templates/page.html` to a new HTML file and replace its title, description and content. The template already calls the shared banner loader and includes fallback links; no banner code needs to be designed again. The script inserts banners after the first header if the placeholder is missing. An arbitrary page that omits both the template and loader will not acquire banners automatically.

Add each new page to the shared navigation in `partials/site-banners.html`, update the fallback navigation in the template, and add its URL to `sitemap.xml`. To refresh static fallback snapshots on existing pages, copy the updated partial between their `data-site-promotions` wrapper and its closing div. Live JavaScript-enabled pages always use the shared partial.

Keep the existing GitHub Pages publishing source. This change requires no build tools, dependencies or publishing configuration changes.

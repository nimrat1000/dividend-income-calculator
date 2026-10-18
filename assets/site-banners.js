/* Shared banners: change partials/site-banners.html once for every page. */
(() => {
  'use strict';
  const script = document.currentScript;
  const base = new URL('../', script.src);
  const markCurrent = host => {
    const current = location.pathname.replace(/\/index\.html$/, '/');
    host.querySelectorAll('.mft-pages a').forEach(link => {
      if (new URL(link.href).pathname.replace(/\/index\.html$/, '/') === current) {
        link.setAttribute('aria-current', 'page');
      } else { link.removeAttribute('aria-current'); }
    });
  };
  async function mount() {
    let host = document.querySelector('[data-site-promotions]');
    if (!host) {
      host = document.createElement('div');
      host.className = 'site-promotions';
      host.setAttribute('data-site-promotions', '');
      const header = document.querySelector('header');
      if (header) header.after(host); else document.body.prepend(host);
    }
    markCurrent(host);
    try {
      const response = await fetch(new URL('partials/site-banners.html', base), {cache: 'no-cache'});
      if (!response.ok) throw new Error('Shared banners unavailable');
      const template = document.createElement('template');
      template.innerHTML = await response.text();
      host.replaceChildren(template.content.cloneNode(true));
      markCurrent(host);
    } catch (_) {
      // The existing static banner and navigation remain visible if fetch fails.
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();

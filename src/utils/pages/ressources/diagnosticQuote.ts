const TARGET_CATEGORY = 'Diagnostic architectural';
const QUOTE_SELECTOR = '.p-structure_content-quote';

/**
 * Affiche l'élément `.p-structure_content-quote` uniquement quand la catégorie
 * "Diagnostic architectural" est active (query `?categorie=Diagnostic+architectural`
 * mis à jour par Finsweet cmsfilter). Sinon, le remet en display:none.
 */
export const diagnosticQuote = () => {
  const quote = document.querySelector<HTMLElement>(QUOTE_SELECTOR);
  if (!quote) return;

  const update = () => {
    const categorie = new URLSearchParams(window.location.search).get('categorie') ?? '';
    const isActive = categorie
      .split(',')
      .map((value) => value.trim())
      .includes(TARGET_CATEGORY);

    quote.style.display = isActive ? 'block' : 'none';
  };

  // État initial
  update();

  // cmsfilter met à jour l'URL via history.pushState/replaceState (sans reload)
  const { pushState, replaceState } = window.history;
  window.history.pushState = function (...args) {
    pushState.apply(this, args);
    update();
  };
  window.history.replaceState = function (...args) {
    replaceState.apply(this, args);
    update();
  };

  // Navigation avant/arrière
  window.addEventListener('popstate', update);
};

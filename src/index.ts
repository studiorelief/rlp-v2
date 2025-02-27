import './index.css';

import { openNewTabs } from '$utils/component/openNewTabs';
import { seeMore } from '$utils/component/seeMore';
import loadScript from '$utils/global/loadScript';
import { initMarker } from '$utils/global/marker';
import { fadeInMenu, handleNavBackground } from '$utils/global/tricks';
import { svgComponent } from '$utils/global/tricks';
import { hideTocIfEmpty } from '$utils/pages/actualites/actualitesToc';
import { copyUrl } from '$utils/pages/actualites/copyURL';
import { initMap } from '$utils/pages/projets/map/map';
import { swiperGalerie, swiperPromotions } from '$utils/pages/projets/swiper';
import { toggleDetails } from '$utils/pages/projets/toggleDetails';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* global */

  handleNavBackground();

  // Finsweet Attributes
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js'),
    // loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsnest@1/cmsnest.js'),
    // loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-selectcustom@1/selectcustom.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js'),
    // loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
  ]);

  // Recettage
  initMarker();

  // svg
  svgComponent();

  // lirePlus
  seeMore();

  // tricks for link
  openNewTabs();

  // Toc load
  fadeInMenu();

  if (window.location.pathname === '/') {
    initMap();
  }

  // projets Slider & toggleDetails
  if (
    window.location.pathname.includes('les-projets') ||
    window.location.pathname.includes('projets')
  ) {
    swiperPromotions();
    swiperGalerie();
    toggleDetails();
    initMap();
  }

  if (
    window.location.pathname.includes('actualites') ||
    window.location.pathname.includes('projets')
  ) {
    copyUrl();
  }

  // hide toc if empty
  if (window.location.pathname.includes('actualites')) {
    hideTocIfEmpty();
  }
});

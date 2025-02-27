import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

/**
 * Get default map configuration
 * @returns Default center coordinates and zoom level for the map
 */
function getConfig() {
  // Default center coordinates for France
  const defaultCenter: [number, number] = [2.213749, 46.227638]; // Center of France
  const defaultZoom = 5; // Zoom level to show all of France

  return { defaultCenter, defaultZoom };
}

// Get default configuration
const { defaultCenter, defaultZoom } = getConfig();

export function initMap() {
  try {
    // const monument = [12.65147, 55.608166];
    mapboxgl.accessToken =
      'pk.eyJ1IjoicmVpbnZlbnRlcmxlcGF0cmltb2luZSIsImEiOiJjbTdscTJwcXAwaGE3MmxzNm9sc3kweW81In0.3axEQASUSrDP7z7w-Z3KMA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/reinventerlepatrimoine/cm7eplkzl006j01r3e9g02a8h',
      //   center: [monument[0], monument[1]] as [number, number],
      center: defaultCenter,
      zoom: defaultZoom,
      projection: 'globe',
    });

    let currentPopup: mapboxgl.Popup | undefined;
    let currentMarker: HTMLDivElement | undefined;
    let currentItem: Element | undefined;

    document.querySelectorAll('.projets_map_cards').forEach((element) => {
      const cmsItem = element;
      const lat = cmsItem.querySelector('.projets_map_card-lat')?.textContent || '0';
      const lon = cmsItem.querySelector('.projets_map_card-lon')?.textContent || '0';
      const body = cmsItem.querySelector('.projets_map_popup');
      const el = document.querySelector('.star.is-source') as HTMLDivElement;

      const popup = new mapboxgl.Popup({
        offset: 1.5 * 16,
        closeButton: true,
        maxWidth: 'auto',
      }).setHTML(body?.outerHTML || '');

      new mapboxgl.Marker(el)
        .setLngLat([parseFloat(lon), parseFloat(lat)])
        .setPopup(popup)
        .addTo(map);

      // Map click handler
      map.on('click', (e) => {
        if ((e.originalEvent.target as HTMLElement).getAttribute('aria-label') === 'Map') {
          currentMarker?.classList.remove('show');
        }
      });

      // Marker event handlers
      el.addEventListener('click', () => {
        popup.addTo(map);
        if (currentMarker) {
          currentItem?.classList.remove('active');
          currentMarker.classList.remove('show');
          currentPopup?.remove();
        }
        currentItem = element;
        currentItem.classList.add('active');
        currentMarker = el;
        currentMarker.classList.add('show');
        currentPopup = popup;

        map.flyTo({
          center: [parseFloat(lon), parseFloat(lat)],
          zoom: 8,
          essential: true,
        });
      });

      el.addEventListener('mouseover', () => {
        // Remove previous popup and classes if exists
        if (currentMarker && currentMarker !== el) {
          currentMarker.classList.remove('show', 'active');
          currentPopup?.remove();
        }

        popup.addTo(map);
        el.classList.add('show', 'active');

        // Update current references
        currentMarker = el;
        currentPopup = popup;
        currentItem = element;
      });

      el.addEventListener('mouseout', () => {
        // Ne rien faire au mouseout pour garder le popup visible
      });

      // List item event handlers
      element.addEventListener('click', () => {
        map.flyTo({
          center: [parseFloat(lon), parseFloat(lat)],
          zoom: 8,
          essential: true,
        });

        if (currentMarker) {
          currentItem?.classList.remove('active');
          currentMarker.classList.remove('show');
          currentPopup?.remove();
        }

        popup.addTo(map);
        el.classList.add('show');
        currentMarker = el;
        currentPopup = popup;
        currentItem = element;
        currentItem.classList.add('active');
      });

      element.addEventListener('mouseover', () => {
        popup.addTo(map);
        el.classList.add('show');
      });

      element.addEventListener('mouseout', () => {
        if (currentMarker !== el) {
          popup.remove();
          el.classList.remove('show');
        }
      });
    });

    return map;
  } catch (error) {
    console.error('Error initializing map:', error);
    throw error;
  }
}

export const hideTocIfEmpty = () => {
  const tocLink = document.querySelector('[fs-toc-element="link-1"]');
  const tocWrapper = document.querySelector('.p-structure_menu-wrapper');

  if (tocLink?.textContent?.includes('Ancre - Level H2') && tocWrapper) {
    (tocWrapper as HTMLElement).style.display = 'none';
  }
};

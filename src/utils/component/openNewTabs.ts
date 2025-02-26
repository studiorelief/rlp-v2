export const openNewTabs = () => {
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    const blankAttr = link.getAttribute('blank');
    if (blankAttr === 'true') {
      link.setAttribute('target', '_blank');
    }
  });
};

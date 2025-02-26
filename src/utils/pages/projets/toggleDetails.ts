export async function toggleDetails() {
  // Sélectionner les éléments avec les attributs show et goto
  const level2Buttons = document.querySelectorAll('[show="level-2"]');
  const level1Buttons = document.querySelectorAll('[goto="level-1"]');

  // Gérer les boutons level-2
  level2Buttons.forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.projets_level-1')?.setAttribute('style', 'display: none');
      document.querySelector('.projets_level-2')?.setAttribute('style', 'display: block');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Gérer les boutons level-1
  level1Buttons.forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.projets_level-1')?.setAttribute('style', 'display: block');
      document.querySelector('.projets_level-2')?.setAttribute('style', 'display: none');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Gérer les boutons apports-rlp
  const apportsButtons = document.querySelectorAll('[show="apports-rlp"]');

  apportsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Récupérer l'URL actuelle sans le hash et ajouter la nouvelle ancre
      const baseUrl = window.location.href.split('#')[0];
      window.location.href = `${baseUrl}#les-apports-de-rlp`;
    });
  });
}

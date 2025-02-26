export function lirePlusTrigger(): void {
  // Attendre que le DOM soit complètement chargé
  document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons "lire plus" avec l'attribut show="plus"
    const lirePlusButtons = document.querySelectorAll('[show="plus"]');

    lirePlusButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        const textWrapper = button.closest('.quote_text-wrapper');

        if (textWrapper) {
          (textWrapper as HTMLElement).style.setProperty('-webkit-line-clamp', 'none');
          (button as HTMLElement).style.display = 'none';
        }
      });
    });
  });
}

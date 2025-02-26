export function seeMore() {
  const buttonShowMore = document.querySelectorAll('[show="plus"]');

  buttonShowMore.forEach((element) => {
    element.addEventListener('click', () => {
      const quoteWrapper = document.querySelector('.quote_text-wrapper');
      if (quoteWrapper && element.textContent === 'voir moins') {
        (quoteWrapper as HTMLElement).style.webkitLineClamp = '3';
        element.textContent = 'voir plus';
      } else {
        (quoteWrapper as HTMLElement).style.webkitLineClamp = 'none';
        element.textContent = 'voir moins';
      }
    });
  });
}

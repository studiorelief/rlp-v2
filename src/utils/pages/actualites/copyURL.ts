import gsap from 'gsap';

export function copyUrl() {
  const copyButton = document.querySelector('#copy-url');
  const copiedText = document.querySelector('.share_copied-text');

  if (!copyButton || !copiedText) return;

  copyButton.addEventListener('click', () => {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href);

    // Animate copied text notification
    gsap.fromTo(
      copiedText,
      {
        y: '-1rem',
        opacity: 0,
        display: 'none',
      },
      {
        y: '0rem',
        opacity: 1,
        display: 'flex',
        duration: 0.3,
        onComplete: () => {
          // Return to initial state after 2 seconds
          gsap.to(copiedText, {
            y: '-1rem',
            opacity: 0,
            duration: 0.3,
            delay: 2,
          });
        },
      }
    );
  });
}

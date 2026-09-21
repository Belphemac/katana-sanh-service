const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyStatus.textContent = 'Adresse e-mail copiée.';
  } catch {
    copyStatus.textContent = 'E-mail : katana.sanh.services@gmail.com';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

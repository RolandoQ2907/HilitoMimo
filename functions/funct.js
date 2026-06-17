function toggleMenu() {
  document.getElementById('menu-overlay').classList.toggle('open');
}

function closeMenu(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('menu-overlay').classList.remove('open');
}
function toggleHileria() {
  const sec = document.getElementById('sec-hileria');
  const estáAbierta = sec.classList.contains('active');

  if (estáAbierta) {
    switchTab('notas', document.querySelector('nav button'));
  } else {
    switchTab('hileria');
  }

  closeMenu();
}
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  toggleButton.textContent = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
});
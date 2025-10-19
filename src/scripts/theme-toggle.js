// theme-toggle.js
class ThemeToggle {
  constructor() {
    this.toggleBtn = document.getElementById('themeToggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';

    this.init();
  }

  init() {
    // Установи начальную тему
    this.setTheme(this.currentTheme);

    // Добавь обработчик клика
    this.toggleBtn.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateButton(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    this.currentTheme = newTheme;
  }

  updateButton(theme) {
    const icon = this.toggleBtn.querySelector('.theme-toggle__icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// Инициализация когда DOM загружен
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});

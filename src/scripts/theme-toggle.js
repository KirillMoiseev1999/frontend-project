class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = this.themeToggle.querySelector('.theme-toggle__icon');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }
  
  init() {
    // Устанавливаем начальную тему
    this.setTheme(this.currentTheme);
    
    // Вешаем обработчик на кнопку
    this.themeToggle.addEventListener('click', () => {
      this.toggleTheme();
    });
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(this.currentTheme);
    this.saveTheme();
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Обновляем иконку
    if (theme === 'dark') {
      this.themeIcon.textContent = '☀️';
    } else {
      this.themeIcon.textContent = '🌙';
    }
  }
  
  saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }
}

// Инициализация когда DOM загружен
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
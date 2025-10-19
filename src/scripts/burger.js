class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector('.mobile-menu-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.isOpen = false;
    this.init();
  }

  init() {
    this.menuBtn.addEventListener('click', () => {
      this.toggleMenu();
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.mobileMenu.classList.toggle('active');
    this.menuBtn.textContent = this.isOpen ? '✕' : '☰';
  }

  closeMenu() {
    this.isOpen = false;
    this.mobileMenu.classList.remove('active');
    this.menuBtn.textContent = '☰';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu();
});

import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() darkMode: boolean = false;
  @Output() navClose = new EventEmitter<void>();

  isMobile = signal(false);
  isMenuOpen = signal(false);
  isClosing = signal(false); // Neues Signal für Schließ-Animation
  isGerman: boolean = true;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth <= 425);
    if (!this.isMobile()) {
      this.isMenuOpen.set(false);
      this.isClosing.set(false);
    }
  }

  toggleMenu() {
    if (this.isMenuOpen()) {
      this.closeMenuWithAnimation();
    } else {
      this.isMenuOpen.set(true);
      this.isClosing.set(false);
    }
  }

  closeMenuWithAnimation() {
    this.isClosing.set(true);

    setTimeout(() => {
      this.isMenuOpen.set(false);
      this.isClosing.set(false);
    }, 300);
  }

  closeNav() {
    this.closeMenuWithAnimation();
    this.navClose.emit();
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
  }
}

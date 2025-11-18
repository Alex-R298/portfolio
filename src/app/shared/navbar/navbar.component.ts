import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation-service/translation-service.component';

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
  isClosing = signal(false);

  constructor(public ts: TranslationService) {}

  get isGerman(): boolean {
    return this.ts.currentLang() === 'de';
  }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth <= 820);
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
    this.ts.toggleLanguage();
  }
}


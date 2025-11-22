import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation-service/translation-service.component';

/**
 * Navigation bar component with responsive menu and language toggle
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  /** Indicates if dark mode is enabled */
  @Input() darkMode: boolean = false;
  
  /** Event emitted when navigation should be closed */
  @Output() navClose = new EventEmitter<void>();

  /** Signal indicating if the viewport is in mobile size */
  isMobile = signal(false);
  
  /** Signal indicating if the mobile menu is currently open */
  isMenuOpen = signal(false);
  
  /** Signal indicating if the menu is currently in the process of closing */
  isClosing = signal(false);

  constructor(public ts: TranslationService) {}

  /**
   * Gets whether the current language is German
   * @returns {boolean} True if the current language is German
   */
  get isGerman(): boolean {
    return this.ts.currentLang() === 'de';
  }

  /**
   * Lifecycle hook that initializes the component
   * Sets up screen size checking and resize event listener
   */
  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  /**
   * Lifecycle hook that cleans up the component
   * Removes the resize event listener
   */
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  /**
   * Checks the current screen size and updates mobile state
   * Automatically closes the menu if screen size exceeds mobile threshold
   */
  checkScreenSize() {
    this.isMobile.set(window.innerWidth <= 820);
    if (!this.isMobile()) {
      this.isMenuOpen.set(false);
      this.isClosing.set(false);
    }
  }

  /**
   * Toggles the mobile menu open or closed
   */
  toggleMenu() {
    if (this.isMenuOpen()) {
      this.closeMenuWithAnimation();
    } else {
      this.isMenuOpen.set(true);
      this.isClosing.set(false);
    }
  }

  /**
   * Closes the menu with animation
   * Uses a timeout to allow CSS animations to complete
   */
  closeMenuWithAnimation() {
    this.isClosing.set(true);
    setTimeout(() => {
      this.isMenuOpen.set(false);
      this.isClosing.set(false);
    }, 300);
  }

  /**
   * Closes the navigation and emits the navClose event
   */
  closeNav() {
    this.closeMenuWithAnimation();
    this.navClose.emit();
  }

  /**
   * Toggles between available languages
   */
  toggleLanguage() {
    this.ts.toggleLanguage();
  }
}


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
  isGerman: boolean = true; // false = EN, true = DE

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth <= 425);
    // Menu schließen wenn von Mobile zu Desktop gewechselt wird
    if (!this.isMobile()) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeNav() {
    this.isMenuOpen.set(false);
    this.navClose.emit();
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
  }
}

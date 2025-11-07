import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() navClose = new EventEmitter<void>();

 isGerman: boolean = true; // false = EN, true = DE

  closeNav() {
    this.navClose.emit();
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
  }
}

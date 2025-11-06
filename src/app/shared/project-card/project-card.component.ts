import { Component, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Output() close = new EventEmitter<void>(); // ← Event zum Parent senden

  closeCard() {
    this.close.emit(); // ← Sagt dem Parent: "Schließ mich!"
  }
}

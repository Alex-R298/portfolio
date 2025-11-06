import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {


  @Input() projectData: any;
  @Output() close = new EventEmitter<void>(); // ← Event zum Parent senden
  @Output() next = new EventEmitter<void>();

  closeCard() {
    this.close.emit(); // ← Sagt dem Parent: "Schließ mich!"
  }

  nextProject() {
    this.next.emit();
  }
}

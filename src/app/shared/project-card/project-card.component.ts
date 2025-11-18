import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component'; // ← NEU: Pfad anpassen!

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // ← NEU: NavbarComponent hinzugefügt
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectData: any;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  closeCard() {
    this.close.emit();
  }

  nextProject() {
    this.next.emit();
  }
}
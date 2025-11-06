import { Component, Renderer2 } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showProjectCard = false;

  constructor(private renderer: Renderer2) {}

  projectDetails() {
    this.showProjectCard = true;
    // Scrollen verhindern
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeProjectCard() {
    this.showProjectCard = false;
    // Scrollen wieder erlauben
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}

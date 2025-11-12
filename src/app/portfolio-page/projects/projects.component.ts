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
  selectedProject: any = null;
  currentProjectIndex = 0;

  constructor(private renderer: Renderer2) { }

  projects = [
    {
      name: 'Join',
      description: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      implementation: 'Kurzer Text, der deine Rolle oder den Workflow für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen und deine Fähigkeit erfahren, eigenständig oder kollaborativ in einer strukturierten Weise zu arbeiten.',
      duration: '5 Wochen',
      imgSkills: ['CSS.png', 'HTML.png', 'Js.png', 'Firebase.png'],
      skillsNames: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
      img: 'join.png',
      lineWidth: 120,
      lineHeight: 20
    },
    {
      name: 'Pixel Quest',
      description: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      implementation: 'Kurzer Text, der deine Rolle oder den Workflow für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen und deine Fähigkeit erfahren, eigenständig oder kollaborativ in einer strukturierten Weise zu arbeiten.',
      duration: '3 Wochen',
      imgSkills: ['CSS.png', 'HTML.png', 'Js.png'],
      skillsNames: ['CSS', 'HTML', 'JavaScript'],
      img: 'pixel-game.png',
      lineWidth: 340,
      lineHeight: 20
    },
    // {
    // name: 'DABubble',
    // description: 'Diese App ist ein Slack-Clone. Sie revolutioniert Team-Kommunikation und Zusammenarbeit mit ihrer intuitiven Oberfläche, Echtzeit-Messaging und robuster Channel-Organisation.',
    // implementation: 'Kurzer Text, der deine Rolle oder den Workflow für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen und deine Fähigkeit erfahren, eigenständig oder kollaborativ in einer strukturierten Weise zu arbeiten.'
    // imgSkills: ['CSS.png','HTML.png','Ts.png','Angular.png'],
    // img: 'Component 30.png'
    // },
  ]

  projectDetails(project: any) {
    this.showProjectCard = true;
    this.selectedProject = project;
    this.currentProjectIndex = this.projects.indexOf(project);
    // Scrollen verhindern
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentProjectIndex];
  }

  closeProjectCard() {
    this.showProjectCard = false;
    // Scrollen wieder erlauben
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}

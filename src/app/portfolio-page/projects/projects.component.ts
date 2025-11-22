import { Component, Renderer2 } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation-service/translation-service.component';

/**
 * Component that displays a portfolio of projects with detailed views
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  /** Indicates whether the project detail card is visible */
  showProjectCard = false;
  
  /** Currently selected project for detailed view */
  selectedProject: any = null;
  
  /** Index of the currently displayed project */
  currentProjectIndex = 0;

  constructor(private renderer: Renderer2,
    public ts: TranslationService
  ) { }

  /** Array of portfolio projects with their details */
  projects = [
    {
    name: 'Join',
    description: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
    implementation: 'In diesem Gruppenprojekt haben wir die Aufgaben aufgeteilt. Mein Fokus lag auf der Frontend-Entwicklung, wo ich die Drag-and-Drop-Funktionalität und das responsive Design umgesetzt habe.',
    duration: '5 Wochen',
    imgSkills: ['CSS.png', 'HTML.png', 'Js.png', 'Firebase.png'],
    skillsNames: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
    img: 'join.png',
    lineWidth: 120,
    lineHeight: 20,
    lineWidthTablet: 88,
    githubLink: 'https://github.com/Alex-R298/Join.git',
    liveLink: 'http://join.alex-reitz.de/'
  },
  {
    name: 'Pixel Quest',
    description: 'Ein 2D-Plattformspiel mit objektorientierter Programmierung. Steuere den Helden, sammle Münzen und bekämpfe gefährliche Pilze auf deinem Weg zum Endboss.',
    implementation: 'Ich habe das Spiel mit objektorientiertem JavaScript und HTML5 Canvas entwickelt. Meine Aufgaben umfassten Spiellogik, Kollisionserkennung und Sprite-Animationen. Der Code ist modular aufgebaut.',
    duration: '3 Wochen',
    imgSkills: ['CSS.png', 'HTML.png', 'Js.png'],
    skillsNames: ['CSS', 'HTML', 'JavaScript'],
    img: 'pixel-game.png',
    lineWidth: 340,
    lineHeight: 20,
    lineWidthTablet: 264,
    githubLink: 'https://github.com/Alex-R298/Pixel-Quest.git',
    liveLink: 'http://pixel-quest.alex-reitz.de/'
  },
    // {
    // name: 'DABubble',
    // description: 'Diese App ist ein Slack-Clone. Sie revolutioniert Team-Kommunikation und Zusammenarbeit mit ihrer intuitiven Oberfläche, Echtzeit-Messaging und robuster Channel-Organisation.',
    // implementation: 'Kurzer Text, der deine Rolle oder den Workflow für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen und deine Fähigkeit erfahren, eigenständig oder kollaborativ in einer strukturierten Weise zu arbeiten.'
    // imgSkills: ['CSS.png','HTML.png','Ts.png','Angular.png'],
    // img: 'Component 30.png'
    // },
  ];

  /**
   * Opens the project detail card for the selected project
   * @param {any} project - The project object to display in detail view
   */
  projectDetails(project: any) {
    this.showProjectCard = true;
    this.selectedProject = project;
    this.currentProjectIndex = this.projects.indexOf(project);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  /**
   * Navigates to the next project in the portfolio
   * Cycles back to the first project after the last one
   */
  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentProjectIndex];
  }

  /**
   * Closes the project detail card and restores page scrolling
   */
  closeProjectCard() {
    this.showProjectCard = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
}

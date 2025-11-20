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
      implementation: 'In diesem Gruppenprojekt haben wir die Aufgaben aufgeteilt. Mein Fokus lag auf der Frontend-Entwicklung, wo ich die Drag-and-Drop-Funktionalität und das responsive Design umgesetzt habe.',
      duration: '5 Wochen',
      imgSkills: ['CSS.png', 'HTML.png', 'Js.png', 'Firebase.png'],
      skillsNames: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
      img: 'join.png',
      lineWidth: 120,
      lineHeight: 20,
      lineWidthTablet: 88,
      githubLink: 'https://github.com/Alex-R298/Join.git',
      liveLink: 'https://join.alexreitz.com' // Falls du eine Live-Demo hast
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
      liveLink: 'https://pixelquest.alexreitz.com' // Falls du eine Live-Demo hast
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

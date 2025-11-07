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

  constructor(private renderer: Renderer2) {}

  projects = [
    {
      name:'Join',
      description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      implementation:'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration:'5 weeks',
      imgSkills:['CSS.png','HTML.png','Js.png','Firebase.png'],
      skillsNames:['CSS','HTML','JavaScript','Firebase'],
      img:'join.png',
      lineWidth: 120,
      lineHeight: 20
    },
    {
      name:'Pixel Quest',
      description:'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
      implementation:'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration:'3 weeks',
      imgSkills:['CSS.png','HTML.png','Js.png'],
      skillsNames:['CSS','HTML','JavaScript'],
      img:'pixel-game.png',
      lineWidth: 340,
      lineHeight: 20
    },
    // {
    //   name:'DABubble',
    //   description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    //   implementation:'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    //   duration:'4 weeks',
    //   imgSkills:['CSS.png','HTML.png','Ts.png','Angular.png'],
    //   img:'Component 30.png'
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

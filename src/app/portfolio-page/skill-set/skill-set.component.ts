import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TranslationService } from '../../services/translation-service/translation-service.component';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  constructor(public ts: TranslationService) {}

  isPeeled = false;

  skills: { img: string, title: string }[] = [
  { img: "HTML.png",
    title: "HTML",
  },
  { img: "CSS.png",
    title: "CSS",
  },
  { img: "Js.png",
    title: "JavaScript",
  },
  { img: "Ts.png",
    title: "TypeScript",
  },
  { img: "Angular.png",
    title: "Angular",
  },
  { img: "Firebase.png",
    title: "Firebase",
  },
  { img: "Git.png",
    title: "Git",
  },
  { img: "Rest-Api.png",
    title: "REST API",
  },
  { img: "Scrum.png",
    title: "Scrum",
  },
  { img: "Material-Design.png",
    title: "Material Design",
  },
  { img: "Python.png",
    title: "Python",
  },
  { img: "Django.png",
    title: "Django",
  },
  { img: "Linux.png",
    title: "Linux",
  },
  { img: "Redis.png",
    title: "Redis",
  },
  { img: "PostgreSQL.png",
    title: "PostgreSQL",
  },
  { img: "SQL.png",
    title: "SQL",
  },
  { img: "Docker.png",
    title: "Docker",
  },
  // { img: "Cloud.png",
  //   title: "Cloud",
  // },



];

pullToPeel() {
    this.isPeeled = !this.isPeeled;
  }
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

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
  { img: "Scrum.png",
    title: "Scrum",
  },
  { img: "Material-Design.png",
    title: "Material Design",
  }
];

pullToPeel() {
    this.isPeeled = !this.isPeeled;
  }
}



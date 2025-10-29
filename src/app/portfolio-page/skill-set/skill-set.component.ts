import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  skills: { img: string, title: string }[] = [
    { img : "CSS.png",
      title: "CSS",
  },
    { img : "Js.png",
      title: "JavaScript",
  },
    { img : "Ts.png",
      title: "TypeScript",
  },
    { img : "Angular.png",
      title: "Angular",
  },
    { img : "Scrum.png",
      title: "Scrum",
  },
    { img : "Material-Design.png",
      title: "Material Design",
  },
  { img : "Git.png",
      title: "Git",
  },
  { img : "Firebase.png",
      title: "Firebase",
  },
  { img : "HTML.png",
      title: "HTML",
  }
];

}

import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [AboutMeComponent, HeroComponent ,SkillSetComponent, ProjectsComponent, ContactMeComponent, ColleaguesComponent ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
}

import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation-service/translation-service.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public ts: TranslationService) {}
}

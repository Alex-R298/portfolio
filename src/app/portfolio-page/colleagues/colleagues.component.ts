import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation-service/translation-service.component';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
  constructor
    (public ts: TranslationService) {}
}

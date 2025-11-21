import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { TranslationService } from '../../services/translation-service/translation-service.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent  {
  constructor(public ts: TranslationService) {}
}

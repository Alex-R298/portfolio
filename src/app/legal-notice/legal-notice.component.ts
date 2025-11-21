import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation-service/translation-service.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  constructor(
    private location: Location,
    private router: Router,
    public ts: TranslationService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    document.body.classList.add('legal-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('legal-page');
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'top' }).then(() => {
      window.scrollTo(0, 0);
    });
  }

  t(text: string): string {
  return this.ts.t(text);
}
}
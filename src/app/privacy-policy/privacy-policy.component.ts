import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation-service/translation-service.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  constructor(
    private location: Location,
    private router: Router,
    public ts: TranslationService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    document.body.classList.add('privacy-policy');
  }

  ngOnDestroy() {
    document.body.classList.remove('privacy-policy');
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
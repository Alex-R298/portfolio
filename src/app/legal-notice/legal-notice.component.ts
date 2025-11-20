import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
    private router: Router
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
}
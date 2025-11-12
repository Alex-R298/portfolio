import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'top' }).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
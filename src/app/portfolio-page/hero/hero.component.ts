import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  frontendLetters: { char: string, original: string }[] = [];
  developerLetters: { char: string, original: string }[] = [];

  ngOnInit() {
    this.frontendLetters = 'Frontend'.split('').map(char => ({ 
      char: char, 
      original: char 
    }));
    
    this.developerLetters = 'DEVELOPER'.split('').map(char => ({ 
      char: char, 
      original: char 
    }));
  }

  over(index: number, type: 'frontend' | 'developer') {
    if (type === 'frontend') {
      const item = this.frontendLetters[index];
      item.char = item.original === item.original.toUpperCase() 
        ? item.original.toLowerCase() 
        : item.original.toUpperCase();
    } else {
      const item = this.developerLetters[index];
      item.char = item.original === item.original.toUpperCase() 
        ? item.original.toLowerCase() 
        : item.original.toUpperCase();
    }
  }

  out(index: number, type: 'frontend' | 'developer') {
    if (type === 'frontend') {
      this.frontendLetters[index].char = this.frontendLetters[index].original;
    } else {
      this.developerLetters[index].char = this.developerLetters[index].original;
    }
  }
}

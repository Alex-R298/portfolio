import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { TranslationService } from '../../services/translation-service/translation-service.component';

/**
 * Hero section component with interactive letter animations
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {

  constructor(public ts: TranslationService) {}

  /** Signal indicating if the viewport is in mobile size */
  isMobile = signal(false);
  
  /** Array of letters for the "Frontend" text with hover state */
  frontendLetters: { char: string, original: string }[] = [];
  
  /** Array of letters for the "DEVELOPER" text with hover state */
  developerLetters: { char: string, original: string }[] = [];

  /**
   * Lifecycle hook that initializes the component
   * Splits text into individual letters and sets up resize listener
   */
  ngOnInit() {
    this.frontendLetters = 'Frontend'.split('').map(char => ({ 
      char: char, 
      original: char 
    }));
    
    this.developerLetters = 'DEVELOPER'.split('').map(char => ({ 
      char: char, 
      original: char 
    }));

  
    this.checkScreenSize();
    
 
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  /**
   * Lifecycle hook that cleans up the component
   * Removes the resize event listener
   */
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  /**
   * Checks the current screen size and updates mobile state
   */
  checkScreenSize() {
    this.isMobile.set(window.innerWidth <= 768);
  }

  /**
   * Toggles the case of a letter when mouse hovers over it
   * @param {number} index - The index of the letter in the array
   * @param {'frontend' | 'developer'} type - Which text array to modify
   */
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

  /**
   * Restores the original case of a letter when mouse leaves
   * @param {number} index - The index of the letter in the array
   * @param {'frontend' | 'developer'} type - Which text array to restore
   */
  out(index: number, type: 'frontend' | 'developer') {
    if (type === 'frontend') {
      this.frontendLetters[index].char = this.frontendLetters[index].original;
    } else {
      this.developerLetters[index].char = this.developerLetters[index].original;
    }
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<'de' | 'en'>('de');

  private english: { [key: string]: string } = {
    // Navigation
    'Über mich': 'About me',
    'Fähigkeiten': 'Skills',
    'Projekte': 'Projects',
    'Kontakt': 'Contact',

    // Hero Section
    'Hallo Welt': 'Hello World',
    'ICH BIN ALEX REITZ': "I'M ALEX REITZ",
    'Schreib mir': 'Get in Touch',

    // Buttons
    'Zurück': 'Go Back',
    'Nächstes Projekt': 'Next Project',

    // Labels
    'Beschreibung': 'Description',
    'Implementierungsdetails': 'Implementation Details',
    'Dauer': 'Duration',

    // Projects
    'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.': 
      'Task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop functionality, assign users and categories.',
    
    'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.': 
      'Jump, run and throw game based on object-oriented approach. Help Pepe find coins and Tabasco salsa to fight the crazy chicken.',
    
    'Kurzer Text, der deine Rolle oder den Workflow für dieses spezifische Projekt beschreibt. Lass einen Recruiter mehr über dein Wissen und deine Fähigkeit erfahren, eigenständig oder kollaborativ in einer strukturierten Weise zu arbeiten.': 
      'Short text describing your role or workflow for this specific project. Let a recruiter learn more about your knowledge and ability to work independently or collaboratively in a structured way.',
    
    '5 Wochen': '5 Weeks',
    '3 Wochen': '3 Weeks',
  };

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'de' ? 'en' : 'de');
  }

  t(text: string): string {
    if (this.currentLang() === 'en' && this.english[text]) {
      return this.english[text];
    }
    return text;
  }
}
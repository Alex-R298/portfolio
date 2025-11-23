import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation-service/translation-service.component';
import { RouterLink } from '@angular/router';

/**
 * Contact form component with validation and email sending functionality
 */
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  constructor(public ts: TranslationService) { }

  http = inject(HttpClient);

  /** Contact form data object */
  contactData = {
    name: "",
    email: "",
    message: ""
  };

  /** Indicates if privacy policy has been accepted */
  privacyAccepted = false;
  
  /** Shows privacy policy error message */
  showPrivacyError = false;
  
  /** Indicates if form has been submitted */
  formSubmitted = false;
  
  /** Name validation error message */
  nameError = '';
  
  /** Name placeholder error message */
  namePlaceholderError = '';
  
  /** Email validation error message */
  emailError = '';
  
  /** Email placeholder error message */
  emailPlaceholderError = '';
  
  /** Message validation error message */
  messageError = '';
  
  /** Test mode flag to skip actual email sending */
  mailTest = false;

  /** Shows success message after form submission */
  showSuccessMessage = false;

  /** Configuration for the HTTP POST request */
  post = {
    endPoint: 'https://alex-reitz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission with validation
   * @param {NgForm} ngForm - The Angular form instance
   */
  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    this.validateName();
    this.validateEmail();

    if (!this.privacyAccepted) {
      this.showPrivacyError = true;
    }

    if (this.isFormValid(ngForm)) {
      this.submitForm(ngForm);
    }
  }

  /**
   * Checks if the form is valid and ready for submission
   * @param {NgForm} ngForm - The Angular form instance
   * @returns {boolean} True if form is valid
   */
  isFormValid(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.privacyAccepted && !this.nameError && !this.emailError;
  }

  /**
   * Submits the form if validation passes
   * @param {NgForm} ngForm - The Angular form instance
   */
  submitForm(ngForm: NgForm) {
    if (!this.mailTest) {
      this.sendEmail(ngForm);
    } else {
      this.showSuccessMessageWithAnimation(ngForm);
    }
  }

  /**
   * Sends the contact form data via HTTP POST
   * @param {NgForm} ngForm - The Angular form instance
   */
  sendEmail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.showSuccessMessageWithAnimation(ngForm);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  /**
   * Shows success message with fade animation and resets form after delay
   * @param {NgForm} ngForm - The Angular form instance
   */
  showSuccessMessageWithAnimation(ngForm: NgForm) {
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.showSuccessMessage = false;
      this.resetFormData(ngForm);
    }, 2500);
  }

  /**
   * Resets the form and all validation states
   * @param {NgForm} ngForm - The Angular form instance
   */
  resetFormData(ngForm: NgForm) {
    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.message = "";
    this.privacyAccepted = false;
    this.showPrivacyError = false;
    this.formSubmitted = false;
    this.nameError = '';
    this.namePlaceholderError = '';
    this.emailError = '';
    this.emailPlaceholderError = '';
    this.messageError = '';
  }

  /**
   * Validates the name field
   * Checks if name is not empty and contains both first and last name
   */
  validateName() {
    const nameParts = this.contactData.name.trim().split(/\s+/);
    if (this.contactData.name.trim() === '') {
      this.namePlaceholderError = 'Bitte Namen eingeben';
      this.nameError = '';
    } else if (nameParts.length < 2) {
      this.nameError = 'Vor- und Nachname eingeben';
      this.namePlaceholderError = '';
    } else {
      this.nameError = '';
      this.namePlaceholderError = '';
    }
  }

  /**
   * Validates the email field
   * Checks if email is not empty and matches a valid email pattern
   */
  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9_%+\-]+(\.[a-zA-Z0-9_%+\-]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)+$/;
    if (this.contactData.email.trim() === '') {
      this.emailPlaceholderError = 'Bitte E-Mail eingeben';
      this.emailError = '';
    } else if (!emailPattern.test(this.contactData.email)) {
      this.emailError = 'Gültige E-Mail eingeben';
      this.emailPlaceholderError = '';
    } else {
      this.emailError = '';
      this.emailPlaceholderError = '';
    }
  }

  /**
   * Clears name validation errors when user starts typing
   */
  onNameChange() {
    this.nameError = '';
    this.namePlaceholderError = '';
  }

  /**
   * Clears email validation errors when user starts typing
   */
  onEmailChange() {
    this.emailError = '';
    this.emailPlaceholderError = '';
  }

  /**
   * Handler for message field changes
   * No validation needed during typing
   */
  onMessageChange() {
    
  }

  /**
   * Clears privacy policy error when checkbox is checked
   */
  onPrivacyChange() {
    if (this.privacyAccepted) {
      this.showPrivacyError = false;
    }
  }

}

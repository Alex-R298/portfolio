import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation-service/translation-service.component';
import { RouterLink } from '@angular/router';

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

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  privacyAccepted = false;
  showPrivacyError = false;
  formSubmitted = false;
  nameError = '';
  namePlaceholderError = '';
  emailError = '';
  emailPlaceholderError = '';
  messageError = '';
  mailTest = false;

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

  isFormValid(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.privacyAccepted && !this.nameError && !this.emailError;
  }

  submitForm(ngForm: NgForm) {
    if (!this.mailTest) {
      this.sendEmail(ngForm);
    } else {
      this.resetFormData(ngForm);
    }
  }

  sendEmail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.resetFormData(ngForm);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  resetFormData(ngForm: NgForm) {
    ngForm.resetForm();
    this.privacyAccepted = false;
    this.showPrivacyError = false;
    this.formSubmitted = false;
    this.nameError = '';
    this.namePlaceholderError = '';
    this.emailError = '';
    this.emailPlaceholderError = '';
    this.messageError = '';
  }

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

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
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

  onNameChange() {
    this.nameError = '';
    this.namePlaceholderError = '';
    this.formSubmitted = false;
  }

  onEmailChange() {
    this.emailError = '';
    this.emailPlaceholderError = '';
    this.formSubmitted = false;
  }

  onMessageChange() {
    // No action needed during typing
  }

  onPrivacyChange() {
    if (this.privacyAccepted) {
      this.showPrivacyError = false;
    }
  }

}

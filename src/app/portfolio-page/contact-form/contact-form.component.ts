import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

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
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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
      this.namePlaceholderError = 'Oops! it seems your name is missing';
      this.nameError = '';
    } else if (nameParts.length < 2) {
      this.nameError = 'Please enter your first and last name';
      this.namePlaceholderError = '';
    } else {
      this.nameError = '';
      this.namePlaceholderError = '';
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (this.contactData.email.trim() === '') {
      this.emailPlaceholderError = 'Hoppla! your email is required';
      this.emailError = '';
    } else if (!emailPattern.test(this.contactData.email)) {
      this.emailError = 'Please enter a valid email address';
      this.emailPlaceholderError = '';
    } else {
      this.emailError = '';
      this.emailPlaceholderError = '';
    }
  }

  onInputChange() {
    if (!this.privacyAccepted && (this.contactData.name || this.contactData.email || this.contactData.message)) {
      this.showPrivacyError = true;
    } else {
      this.showPrivacyError = false;
    }
  }

  onNameChange() {
    this.nameError = '';
    this.namePlaceholderError = '';
    this.formSubmitted = false;
    this.onInputChange();
  }

  onEmailChange() {
    this.emailError = '';
    this.emailPlaceholderError = '';
    this.formSubmitted = false;
    this.onInputChange();
  }

  onMessageChange() {
    this.onInputChange();
  }

  onPrivacyChange() {
    this.showPrivacyError = false;
  }

}

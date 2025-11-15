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
  emailError = '';
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
    
    if (ngForm.form.valid && this.privacyAccepted && !this.nameError && !this.emailError && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.privacyAccepted = false;
            this.showPrivacyError = false;
            this.formSubmitted = false;
            this.nameError = '';
            this.emailError = '';
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.form.valid && this.privacyAccepted && !this.nameError && !this.emailError && this.mailTest) {
      ngForm.resetForm();
      this.privacyAccepted = false;
      this.showPrivacyError = false;
      this.formSubmitted = false;
      this.nameError = '';
      this.emailError = '';
    }
  }

  validateName() {
    const nameParts = this.contactData.name.trim().split(/\s+/);
    if (this.contactData.name.trim() === '') {
      this.nameError = 'Oops! it seems your name is missing';
    } else if (nameParts.length < 2) {
      this.nameError = 'Please enter your first and last name';
    } else {
      this.nameError = '';
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (this.contactData.email.trim() === '') {
      this.emailError = 'Hoppla! your email is required';
    } else if (!emailPattern.test(this.contactData.email)) {
      this.emailError = 'Please enter a valid email address';
    } else {
      this.emailError = '';
    }
  }

  onInputChange() {
    if (!this.privacyAccepted && (this.contactData.name || this.contactData.email || this.contactData.message)) {
      this.showPrivacyError = true;
    } else {
      this.showPrivacyError = false;
    }
  }

  onPrivacyChange() {
    this.showPrivacyError = false;
  }

}

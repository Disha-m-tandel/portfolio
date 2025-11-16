import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    const params = {
      from_name: this.contactForm.value.name,
      reply_to: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    emailjs.send(
      'service_3jlt26g',        // Replace
      'template_flcgt6x',       // Replace
      params,
      'qKW0-qfnZkJGCGacr'         // Replace
    )
    .then(() => {
      alert("Message sent successfully!");
      this.contactForm.reset();
    })
    .catch((err: any) => {
      alert("Failed to send message.");
      console.log(err);
    });
  }
}

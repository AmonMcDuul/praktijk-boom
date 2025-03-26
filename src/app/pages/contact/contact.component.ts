import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm!: FormGroup;
    showContactFields = false;
    showConfirmation = false;
  
    constructor(private apiService: ApiService) {}


    ngOnInit(): void {
      // Initialize the form group with controls
      this.contactForm = new FormGroup({
        idea: new FormControl('', [Validators.required]),
        name: new FormControl('', 
            // [Validators.required]
        ),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [
        //   Validators.required,
        //   Validators.pattern(/^\+?\d{10,}$/)
        ]),
        honeypot: new FormControl('')
      });
  
      this.contactForm.get('idea')?.valueChanges.subscribe(value => {
        this.showContactFields = value.trim().length > 0;
      });
      this.apiService.setAlive();
    }
  
    onSubmit(): void {
      if (this.contactForm.get('honeypot')?.value !== '')  {
        return;
      }
      if (this.contactForm.valid) {

        const subject = `Contact vraag van ${this.contactForm.get('name')?.value}`;
        const body = `Name: ${this.contactForm.get('name')?.value}\nEmail: ${this.contactForm.get('email')?.value}\nTelephone: ${this.contactForm.get('phone')?.value}\n\nMessage:\n${this.contactForm.get('idea')?.value}`;
    
        this.apiService.sendEmail(subject, body).subscribe(
          response => {
            console.log('Email sent successfully', response);
            this.resetForm();
            this.showConfirmation = true;
        
            setTimeout(() => {
              this.showConfirmation = false;
            }, 10000); 
          },
          error => {
            console.error('Error sending email', error);
          }
        );
      }
    }
  
  
    resetForm(): void {
      this.contactForm.reset();
      this.showContactFields = false;
    }
  }
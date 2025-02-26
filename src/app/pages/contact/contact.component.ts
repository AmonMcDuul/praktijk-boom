import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm!: FormGroup;
    showContactFields = false;
    showConfirmation = false;
  
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
        ])
      });
  
      this.contactForm.get('idea')?.valueChanges.subscribe(value => {
        this.showContactFields = value.trim().length > 0;
      });
    }
  
    onSubmit(): void {
      if (this.contactForm.valid) {
        console.log('Form Data:', this.contactForm.value);
        this.resetForm();
        this.showConfirmation = true;
    
        setTimeout(() => {
          this.showConfirmation = false;
        }, 10000); 
      }
    }
  
    resetForm(): void {
      this.contactForm.reset();
      this.showContactFields = false;
    }
  }
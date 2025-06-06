import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from '../../services/aanmelding.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { Aanmelding } from '../../models/aanmelding.model';

@Component({
  selector: 'app-aanmelden',
  templateUrl: './aanmelden.component.html',
  styleUrls: ['./aanmelden.component.scss'],
  imports: [ReactiveFormsModule, 
    CommonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AanmeldenComponent implements OnInit {
  behandelOptions: string[] = [];
  submissionSuccess: boolean | null = null;
  showConfirmation = false;
  step$;
  aanmeldingForm: FormGroup;
  days: number[] = [];
  months: string[] = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
    'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
  ];
  years: number[] = [];

  constructor(private aanmeldingService: AanmeldingService, private apiService: ApiService) {
    this.aanmeldingForm = this.aanmeldingService.aanmeldingForm;
    this.step$ = this.aanmeldingService.step$;
  }

  ngOnInit(): void {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);
    this.behandelOptions = this.aanmeldingService.getBehandelOptions();
    this.apiService.setAlive().subscribe({
      error: err => console.error('setAlive error:', err)
    });
  }

  // Date filter to restrict selection to specific days
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    //date not in the past
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (date <= currentDate) return false;

    // Monday, Wednesday, Thursday
    const day = date.getDay();
    return day === 1 || day === 3 || day === 4; 
  };

  // Handle date selection
  onDateSelected(date: Date | null): void {
    if (date) {
      this.aanmeldingForm.patchValue({ selectedDate: date });
    } else {
      this.aanmeldingForm.patchValue({ selectedDate: null });
    }
  }

  setStep(step: number): void {
    this.aanmeldingService.setStep(step);
  }

  previousStep(): void {
    this.aanmeldingService.previousStep();
  }

  nextStep(): void {
    this.aanmeldingService.nextStep();
  }

  getFullDate(): string {
    return this.aanmeldingService.getFullDate();
  }

  submitAanmelding(): void {
    const honeypotValue = this.aanmeldingForm.get('honeypot')?.value;
    if (this.aanmeldingForm.valid && (!honeypotValue || honeypotValue.trim() === '')) {
      this.aanmeldingService.submitAanmelding().subscribe(
        (response) => {
          console.log('Aanmelding succesvol:', response);
          this.submissionSuccess = true;
          this.aanmeldingForm.reset();
          this.aanmeldingService.setStep(2);
          this.showConfirmation = true;
          setTimeout(() => {
            this.showConfirmation = false;
            this.aanmeldingService.setStep(0);
          }, 10000); 
        },
        (error) => {
          console.error('Fout bij aanmelden:', error);
          this.submissionSuccess = false;
        }
      );
    }
  }
}
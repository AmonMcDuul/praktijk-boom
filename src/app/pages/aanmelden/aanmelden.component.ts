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
  step$;
  aanmeldingForm: FormGroup;
  days: number[] = [];
  months: string[] = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
    'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
  ];
  years: number[] = [];

  constructor(private aanmeldingService: AanmeldingService) {
    this.aanmeldingForm = this.aanmeldingService.aanmeldingForm;
    this.step$ = this.aanmeldingService.step$;
  }

  ngOnInit(): void {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => 1900 + i);
    this.behandelOptions = this.aanmeldingService.getBehandelOptions();

    this.aanmeldingForm.addControl('day', new FormControl('', Validators.required));
    this.aanmeldingForm.addControl('month', new FormControl('', Validators.required));
    this.aanmeldingForm.addControl('year', new FormControl('', Validators.required));
  }

  // Date filter to restrict selection to specific days
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    //date not in the past
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (date < currentDate) return false;

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
    if (this.aanmeldingForm.valid) {
      const day = this.aanmeldingForm.value.day;
      const month = this.aanmeldingForm.value.month;
      const year = this.aanmeldingForm.value.year;

      // Create a Date object
      const dateOfBirth = new Date(year, month - 1, day);

      // Update the form value with the parsed date
      this.aanmeldingForm.patchValue({ dateOfBirth });
      
      const aanmelding = this.aanmeldingForm.value;
      this.aanmeldingService.submitAanmelding(aanmelding).subscribe(
        (response) => {
          console.log('Aanmelding succesvol:', response);
          this.submissionSuccess = true;
          this.aanmeldingForm.reset();
          this.aanmeldingService.setStep(1);
        },
        (error) => {
          console.error('Fout bij aanmelden:', error);
          this.submissionSuccess = false;
        }
      );
    }
  }
}
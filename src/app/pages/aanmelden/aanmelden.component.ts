import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from '../../services/aanmelding.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private aanmeldingService: AanmeldingService) {
    this.aanmeldingForm = this.aanmeldingService.aanmeldingForm;
    this.step$ = this.aanmeldingService.step$;
  }

  ngOnInit(): void {
    this.behandelOptions = this.aanmeldingService.getBehandelOptions();
  }

  // Date filter to restrict selection to specific days
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    const day = date.getDay();
    return day === 1 || day === 3 || day === 4; // Monday, Wednesday, Thursday
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
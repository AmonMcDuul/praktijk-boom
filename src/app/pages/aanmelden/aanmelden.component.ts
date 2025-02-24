import { Component, OnInit } from '@angular/core';
import { AanmeldingService } from '../../services/aanmelding.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aanmelden',
  templateUrl: './aanmelden.component.html',
  styleUrls: ['./aanmelden.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class AanmeldenComponent implements OnInit {
  behandelOptions: string[] = [];
  submissionSuccess: boolean | null = null;
  currentWeekStart: Date = new Date();
  step$;
  aanmeldingForm: FormGroup;

  constructor(private aanmeldingService: AanmeldingService) {
    this.aanmeldingForm = this.aanmeldingService.aanmeldingForm;
    this.step$ = this.aanmeldingService.step$;
  }

  ngOnInit(): void {
    this.behandelOptions = this.aanmeldingService.getBehandelOptions();
  }

  // goToNextWeek(): void {
  //   this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
  // }

  // goToPreviousWeek(): void {
  //   this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
  // }

  setStep(step: number): void {
    this.aanmeldingService.setStep(step)
  }

  previousStep(): void {
    this.aanmeldingService.previousStep()
  }

  nextStep(): void {
    this.aanmeldingService.nextStep()
  }

  getFullDate(): string {
    return this.aanmeldingService.getFullDate()
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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Aanmelding } from '../models/aanmelding.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AanmeldingService {
  private stepSubject = new BehaviorSubject<number>(0);
  step$ = this.stepSubject.asObservable();
  aanmeldingForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.aanmeldingForm = this.fb.group({
      name: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      behandeling: [''],
      opmerking: [''],
      selectedDate: [null], 
      selectedTime: [''],
    });
  }

  getDateOfBirth(): string {
    const { day, month, year } = this.aanmeldingForm.value;
    if (!day || !month || !year) return '';
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  // Get the full date in the desired format
  getFullDate(): string {
    const selectedDate = this.aanmeldingForm.value.selectedDate;
    if (!selectedDate) return '';

    return selectedDate.toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
    }); // Format as dd/mm
  }

  getBehandelOptions(): string[] {
    return [
      'Telefonisch pre-intake',
    ];
  }

submitAanmelding(): Observable<any> {
  const subject = "Pre-Intake aanvraag";
  const body = `Naam: ${this.aanmeldingForm.get('name')?.value}\n
                Geboortedatum: ${this.getDateOfBirth()}\n
                Telefoon: ${this.aanmeldingForm.get('telephone')?.value}\n
                E-mail: ${this.aanmeldingForm.get('email')?.value}\n
                Opmerking: ${this.aanmeldingForm.get('opmerking')?.value}`;
  return this.apiService.sendEmail(subject, body);
  }

  setStep(step: number): void {
    this.stepSubject.next(step);
  }

  nextStep(): void {
    const currentStep = this.stepSubject.value;
    if (currentStep < 3) {
      this.stepSubject.next(currentStep + 1);
    }
  }

  previousStep(): void {
    const currentStep = this.stepSubject.value;
    if (currentStep >= 1) {
      this.stepSubject.next(currentStep - 1);
    }
  }
}
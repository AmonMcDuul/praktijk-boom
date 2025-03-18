import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Aanmelding } from '../models/aanmelding.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AanmeldingService {
  private apiUrl = 'https://localhost';
  private stepSubject = new BehaviorSubject<number>(0);
  step$ = this.stepSubject.asObservable();
  aanmeldingForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.aanmeldingForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      behandeling: ['', Validators.required],
      opmerking: [''],
      selectedDate: [null, Validators.required], // Add selectedDate to the form
      selectedTime: ['', Validators.required],
    });
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

  checkAvailability(date: Date, time: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/availability?date=${date.toISOString()}&time=${time}`);
  }

  submitAanmelding(aanmelding: Aanmelding): Observable<any> {
    return this.http.post<Aanmelding>(this.apiUrl, aanmelding);
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
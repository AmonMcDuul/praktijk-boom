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
  private stepSubject = new BehaviorSubject<number>(1);
  step$ = this.stepSubject.asObservable();
  aanmeldingForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.aanmeldingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      behandeling: ['', Validators.required],
      selectedDate: [''],
      selectedTime: [''],
    });
  }

  getBehandelOptions(): string[] {
    return ['Behandeling1', 'Behandeling2', 'Behandeling3'];
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
    if (currentStep > 1) {
      this.stepSubject.next(currentStep - 1);
    }
  }
}
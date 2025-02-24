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
      opmerking: [''],
      selectedWeek: [this.getCurrentWeek(), Validators.required],  // Default to current week
      selectedDay: ['', Validators.required],
      selectedTime: ['', Validators.required],
    });
  }

  getCurrentWeek(): number {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDays = (today.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000);
    return Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
  }
  
  getStartDateOfWeek(weekNumber: number): Date {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const daysOffset = (weekNumber - 1) * 7 - startOfYear.getDay();
    return new Date(startOfYear.setDate(startOfYear.getDate() + daysOffset));
  }
  
  getFullDate(): string {
    const selectedWeek = this.aanmeldingForm.value.selectedWeek;
    const selectedDay = this.aanmeldingForm.value.selectedDay;
    if (!selectedWeek || !selectedDay) return '';
  
    const startDate = this.getStartDateOfWeek(selectedWeek);
    const daysMap: { [key: string]: number } = { Maandag: 1, Woensdag: 3, Donderdag: 4 };
    const fullDate = new Date(startDate.setDate(startDate.getDate() + daysMap[selectedDay]));
  
    return fullDate.toLocaleDateString('nl-NL'); // Format as dd/mm/yyyy
  }

  getBehandelOptions(): string[] {
    return ['EMDR enkelvoudig trauma', 'Cognitieve gedragstherapie', 'ADHD Diagnostiek en coaching', 'Wandelsessie', 'Oplossingsgerichte therapie', 'ACT', 'Kortdurende behandeling', 'Overig'];
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
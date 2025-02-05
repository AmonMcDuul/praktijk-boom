import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aanmelding } from '../models/aanmelding.model';

@Injectable({
  providedIn: 'root'
})

export class AanmeldingService {
  private apiUrl = 'https://localhost';

  constructor(private http: HttpClient) { }

  getBehandelOptions(): string[] {
    return ['Behandeling1', 'Behandeling2', 'Behandeling3'];
  }

  checkAvailability(date: Date, time: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/availability?date=${date.toISOString()}&time=${time}`);
  }

  submitAanmelding(aanmelding: Aanmelding): Observable<any> {
    return this.http.post<Aanmelding>(this.apiUrl, aanmelding);
  }
}

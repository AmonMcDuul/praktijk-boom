import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setAlive(): void {
    this.http.get<any>(`${this.apiUrl}/home/setalive`);
  }

  sendEmail(subject: string, body: string): Observable<any> {
    const url = `${this.apiUrl}/Email/send`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const emailRequest = { subject, body };

    return this.http.post<any>(url, emailRequest, { headers });
  }
}

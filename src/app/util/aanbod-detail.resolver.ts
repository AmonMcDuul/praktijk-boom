import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AanbodDetailService } from '../services/aanbod-detail.service';

@Injectable({
  providedIn: 'root'
})
export class AanbodDetailResolver implements Resolve<any> {
  constructor(private aanbodDetailService: AanbodDetailService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const treatmentName = route.paramMap.get('naam') ?? 'emdr-enkelvoudig-trauma';
    const treatment = this.aanbodDetailService.getTreatmentByUrlName(treatmentName);
    return of(treatment);
  }
}

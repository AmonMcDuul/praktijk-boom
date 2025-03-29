import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-therapie-sectie',
  imports: [RouterLink],
  templateUrl: './therapie-sectie.component.html',
  styleUrl: './therapie-sectie.component.scss'
})
export class TherapieSectieComponent {
  @Input() showAanbodLink: boolean = false;
  
  constructor(private router: Router){}

  navigateToTreatmentDetail(treatmentName: string) {
    this.router.navigate(['/aanbod', treatmentName]);
  }
}

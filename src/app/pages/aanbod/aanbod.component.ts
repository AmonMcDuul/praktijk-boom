import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TherapieSectieComponent } from "../../components/therapie-sectie/therapie-sectie.component";

@Component({
  selector: 'app-aanbod',
  imports: [RouterLink, TherapieSectieComponent],
  templateUrl: './aanbod.component.html',
  styleUrl: './aanbod.component.scss'
})
export class AanbodComponent {

  constructor(private router: Router){}

  navigateToTreatmentDetail(treatmentName: string) {
    this.router.navigate(['/aanbod', treatmentName]);
  }
}

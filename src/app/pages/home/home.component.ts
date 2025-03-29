import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TherapieSectieComponent } from "../../components/therapie-sectie/therapie-sectie.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, TherapieSectieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){}

  navigateToTreatmentDetail(treatmentName: string) {
    this.router.navigate(['/aanbod', treatmentName]);
  }
}

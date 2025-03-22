import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AanbodDetailService } from '../../../services/aanbod-detail.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-aanbod-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './aanbod-detail.component.html',
  styleUrl: './aanbod-detail.component.scss'
})
export class AanbodDetailComponent {
  treatment: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.treatment = data['treatment'];
    });
  }
  
  navigateToTreatmentDetail(treatmentName: string) {
    this.router.navigate(['/aanbod', treatmentName]);
  }

  isActive(treatmentName: string): boolean {
    return this.route.snapshot.url[1]?.path === treatmentName;
  }
  
  goBack(): void {
    this.router.navigate(['/aanbod']);
  }
}

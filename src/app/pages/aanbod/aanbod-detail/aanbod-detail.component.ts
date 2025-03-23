import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AanbodDetailService } from '../../../services/aanbod-detail.service';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aanbod-detail',
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './aanbod-detail.component.html',
  styleUrl: './aanbod-detail.component.scss'
})
export class AanbodDetailComponent {
  treatment: any;

  constructor(private router: Router, private route: ActivatedRoute, private aanbodDetailService: AanbodDetailService) {
  }

  ngOnInit() {
    const treatmentName = this.route.snapshot.data['treatmentName'];
    this.treatment = this.aanbodDetailService.getTreatmentByUrlName(treatmentName);
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

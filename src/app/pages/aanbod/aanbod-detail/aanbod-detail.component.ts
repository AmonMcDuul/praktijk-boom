import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AanbodDetailService } from '../../../services/aanbod-detail.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-aanbod-detail',
  imports: [CommonModule],
  templateUrl: './aanbod-detail.component.html',
  styleUrl: './aanbod-detail.component.scss'
})
export class AanbodDetailComponent {
  treatment: any;

  constructor(private route: ActivatedRoute, private aanbodDetailService: AanbodDetailService, private location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const treatmentName = params['naam'];
      this.treatment = this.aanbodDetailService.getTreatmentByUrlName(treatmentName);
    });
  }
  
  goBack(): void {
    this.location.back();
  }
}

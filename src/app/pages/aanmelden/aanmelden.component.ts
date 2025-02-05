import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Aanmelding } from '../../models/aanmelding.model';
import { AanmeldingService } from '../../services/aanmelding.service';

@Component({
  selector: 'app-aanmelden',
  imports: [ReactiveFormsModule],
  templateUrl: './aanmelden.component.html',
  styleUrl: './aanmelden.component.scss'
})
export class AanmeldenComponent {
  aanmeldingForm: FormGroup;
  behandelOptions: string[] = [];
  submissionSuccess: boolean | null = null;
  step: number = 1;
  currentWeekStart: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private aanmeldingService: AanmeldingService
  ) {
    this.aanmeldingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      behandeling: ['', Validators.required],
      selectedDate: [''],
      selectedTime: ['']
    });
  }

  ngOnInit(): void {
    this.behandelOptions = this.aanmeldingService.getBehandelOptions();
  }

  nextStep(): void {
    if (this.step < 3) this.step++;
  }

  previousStep(): void {
    if (this.step > 1) this.step--;
  }

  goToNextWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
  }

  goToPreviousWeek(): void {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
  }

  submitAanmelding(): void {
    if (this.aanmeldingForm.valid) {
      const aanmelding: Aanmelding = this.aanmeldingForm.value;
      this.aanmeldingService.submitAanmelding(aanmelding).subscribe(
        response => {
          console.log('Aanmelding succesvol:', response);
          this.submissionSuccess = true;
          this.aanmeldingForm.reset();
          this.step = 1;
        },
        error => {
          console.error('Fout bij aanmelden:', error);
          this.submissionSuccess = false;
        }
      );
    }
  }
}

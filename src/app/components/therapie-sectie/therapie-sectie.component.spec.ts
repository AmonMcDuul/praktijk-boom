import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieSectieComponent } from './therapie-sectie.component';

describe('TherapieSectieComponent', () => {
  let component: TherapieSectieComponent;
  let fixture: ComponentFixture<TherapieSectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapieSectieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapieSectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

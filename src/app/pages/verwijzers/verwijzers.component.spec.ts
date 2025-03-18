import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwijzersComponent } from './verwijzers.component';

describe('VerwijzersComponent', () => {
  let component: VerwijzersComponent;
  let fixture: ComponentFixture<VerwijzersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerwijzersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerwijzersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

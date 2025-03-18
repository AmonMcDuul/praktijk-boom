import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanbodDetailComponent } from './aanbod-detail.component';

describe('AanbodDetailComponent', () => {
  let component: AanbodDetailComponent;
  let fixture: ComponentFixture<AanbodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AanbodDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AanbodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

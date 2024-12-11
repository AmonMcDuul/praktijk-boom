import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanbodComponent } from './aanbod.component';

describe('AanbodComponent', () => {
  let component: AanbodComponent;
  let fixture: ComponentFixture<AanbodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AanbodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AanbodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

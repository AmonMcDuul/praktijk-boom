import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraktischeInfoComponent } from './praktische-info.component';

describe('PraktischeInfoComponent', () => {
  let component: PraktischeInfoComponent;
  let fixture: ComponentFixture<PraktischeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraktischeInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraktischeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

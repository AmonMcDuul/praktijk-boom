import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividueelComponent } from './individueel.component';

describe('IndividueelComponent', () => {
  let component: IndividueelComponent;
  let fixture: ComponentFixture<IndividueelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividueelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividueelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

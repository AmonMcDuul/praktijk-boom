import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgemeenBerichtComponent } from './algemeen-bericht.component';

describe('AlgemeenBerichtComponent', () => {
  let component: AlgemeenBerichtComponent;
  let fixture: ComponentFixture<AlgemeenBerichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgemeenBerichtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgemeenBerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

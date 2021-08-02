import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacieComponent } from './rezervacie.component';

describe('RezervacieComponent', () => {
  let component: RezervacieComponent;
  let fixture: ComponentFixture<RezervacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

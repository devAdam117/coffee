import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtvHodinyComponent } from './otv-hodiny.component';

describe('OtvHodinyComponent', () => {
  let component: OtvHodinyComponent;
  let fixture: ComponentFixture<OtvHodinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtvHodinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtvHodinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

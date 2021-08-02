import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObchodComponent } from './obchod.component';

describe('ObchodComponent', () => {
  let component: ObchodComponent;
  let fixture: ComponentFixture<ObchodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObchodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObchodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

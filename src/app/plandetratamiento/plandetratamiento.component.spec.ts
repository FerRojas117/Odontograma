import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandetratamientoComponent } from './plandetratamiento.component';

describe('PlandetratamientoComponent', () => {
  let component: PlandetratamientoComponent;
  let fixture: ComponentFixture<PlandetratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandetratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandetratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

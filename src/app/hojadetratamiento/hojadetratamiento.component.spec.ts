import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojadetratamientoComponent } from './hojadetratamiento.component';

describe('HojadetratamientoComponent', () => {
  let component: HojadetratamientoComponent;
  let fixture: ComponentFixture<HojadetratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojadetratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojadetratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

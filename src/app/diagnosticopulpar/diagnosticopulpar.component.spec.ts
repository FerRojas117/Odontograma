import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnosticopulparComponent } from './diagnosticopulpar.component';

describe('DiagnosticopulparComponent', () => {
  let component: DiagnosticopulparComponent;
  let fixture: ComponentFixture<DiagnosticopulparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticopulparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticopulparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

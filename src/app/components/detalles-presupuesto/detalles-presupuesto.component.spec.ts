import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPresupuestoComponent } from './detalles-presupuesto.component';

describe('DetallesPresupuestoComponent', () => {
  let component: DetallesPresupuestoComponent;
  let fixture: ComponentFixture<DetallesPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPresupuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

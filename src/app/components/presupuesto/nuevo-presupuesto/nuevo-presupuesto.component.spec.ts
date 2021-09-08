import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPresupuestoComponent } from './nuevo-presupuesto.component';

describe('NuevoPresupuestoComponent', () => {
  let component: NuevoPresupuestoComponent;
  let fixture: ComponentFixture<NuevoPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPresupuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

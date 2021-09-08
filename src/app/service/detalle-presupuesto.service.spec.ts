import { TestBed } from '@angular/core/testing';

import { DetallePresupuestoService } from './detalle-presupuesto.service';

describe('DetallePresupuestoService', () => {
  let service: DetallePresupuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePresupuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

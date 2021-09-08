import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClasificacionComponent } from './modificar-clasificacion.component';

describe('ModificarClasificacionComponent', () => {
  let component: ModificarClasificacionComponent;
  let fixture: ComponentFixture<ModificarClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarClasificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

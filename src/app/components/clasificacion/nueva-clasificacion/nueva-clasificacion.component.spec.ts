import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaClasificacionComponent } from './nueva-clasificacion.component';

describe('NuevaClasificacionComponent', () => {
  let component: NuevaClasificacionComponent;
  let fixture: ComponentFixture<NuevaClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaClasificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

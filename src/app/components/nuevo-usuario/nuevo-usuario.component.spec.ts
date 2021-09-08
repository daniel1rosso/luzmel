import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuevoUsuarioComponent } from './nuevo-usuario.component';

describe('NuevoUsuarioComponent', () => {
  let component: NuevoUsuarioComponent;
  let fixture: ComponentFixture<NuevoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El usuario debe ser creado', waitForAsync(() => {
    (<HTMLInputElement>document.getElementById('nombreUsuario')).value = 'alanterreno';
    (<HTMLInputElement>document.getElementById('contra')).value = 'alan1234';
    (<HTMLInputElement>document.getElementById('nombrePila')).value = 'Alan';
    (<HTMLInputElement>document.getElementById('apellido')).value = 'Terreno';
    (<HTMLInputElement>document.getElementById('email')).value = 'alan@gmail.com';
    (<HTMLInputElement>document.getElementById('idRol')).value = 'USUARIO';
    expect(document.getElementById('registrar').click());
  }));
});

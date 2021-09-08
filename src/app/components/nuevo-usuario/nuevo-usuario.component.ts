import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';

import { TokenService } from 'src/app/service/token.service';
import { RolesService, Rol } from 'src/app/service/roles.service';
import {UsuarioService} from '../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  roles: Rol[];
  rolSeleccionado:Rol;
  usuario:Usuario = new Usuario();
  
  constructor(
    private _servicio: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private servicioRol : RolesService) { 
      // this.roles = [
      //   {idRol: 1, rolNombre: "ADMINISTRADOR"},
      //   {idRol: 2, rolNombre: "USUARIO"},
      //   {idRol:3,rolNombre:"JUGADOR"}
      // ]
    }
    
    

  ngOnInit(): void {
    this.servicioRol.get().subscribe(respuesta => {this.roles = respuesta;})
  }


  guardar(miFormulario) {
    if (miFormulario.valid) {
      this._servicio.guardarUsuario(miFormulario.value).subscribe(respuesta => {
        this.toastr.success('Usuario Creado', 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/home']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'ERROR', { timeOut: 3000, positionClass: 'toast-top-center' });
      },
    )}
    
  }
  
}
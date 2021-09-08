import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/service/cliente.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  roles: string[];
  isAdmin = false;
  constructor(
    private _servicioCliente: ClienteService,
    private _router: Router,
    private _tokenService: TokenService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._servicioCliente.getClientes();
  }

  guardar(miFormulario) {
    let cliente: any = {};
    cliente.nombre = miFormulario.value.nombre;
    cliente.telefono = miFormulario.value.telefono;
    cliente.direccion = miFormulario.value.direccion;
    cliente.email = miFormulario.value.email;


    if (miFormulario.valid) {
      this._servicioCliente.guardarCliente(cliente).subscribe((respuesta) => {
        console.log(respuesta);
      });
      console.log(cliente);
      this._toastr.info('Cliente Guardado con exito!', 'OK', {
        timeOut: 2500,
        positionClass: 'toast-top-center'
      });
      this._router.navigate(['/clientes']);
    } else {
      alert('Revise los campos');
    }
  }

}

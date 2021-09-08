import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {
clientes:any = {};
idCliente:any;

  constructor(
    private _activate: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _servicioCliente: ClienteService
  ) { 
    this._activate.params.subscribe((parametros) => {
      this._servicioCliente
        .getCliente(parametros['idCliente'])
        .subscribe((respuesta) => {
          this.clientes = respuesta;
          this.idCliente = parametros['idCliente']
        });
    });
  }

  ngOnInit(): void {
  }

  modificarCliente(miFormulario: NgForm) {
    let cliente: any = {};
    let idCliente: number;
    cliente.nombre = miFormulario.value.nombre;
    cliente.telefono = miFormulario.value.telefono;
    cliente.direccion = miFormulario.value.direccion;
    cliente.email = miFormulario.value.email;
    idCliente = this.idCliente;
    cliente.idCliente = this.idCliente;
    if (miFormulario.valid) {
      this._servicioCliente
        .modificarCliente(cliente, idCliente)
        .subscribe((respuesta) => {
          console.log(respuesta);
        });
      this._toastr.success('Modificación exitosa!', 'OK', { timeOut: 2500 });
      this._router.navigate(['/clientes']);
    } else {
      alert('Revise los campos');
    }
    this._servicioCliente.getClientes();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/service/token.service';
import {Cliente, ClienteService} from '../../service/cliente.service'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[] = [];
  roles: string[];
  isAdmin = false;
  isUser = false;

  constructor(
    private _servicioCliente: ClienteService,
    private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._servicioCliente.get().subscribe((respuesta) => {
      this.clientes = respuesta;
    });
  }

  verCliente(idCliente:any){
    this._router.navigate(['/clientes', idCliente]);
  }

  eliminarCliente(idCliente: any) {
    if (confirm('¿Está seguro que desea eliminar el cliente?')) {
      this._servicioCliente.eliminarCliente(idCliente).subscribe((respuesta) => {
        this.clientes = this.clientes.splice(1);
        this.recargar();
      });
    }
  }

  modificarCliente(idCliente: any) {
    this._router.navigate(['/clientes/modificar/' + idCliente]);
  }

  recargar() {
    window.location.reload();
  }

}

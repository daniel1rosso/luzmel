import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clasificacion, ClasificacionService } from 'src/app/service/clasificacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {
  clasificaciones:Clasificacion[] = [];
  roles: string[];
  isAdmin = false;
  isUser = false;
  
  constructor(
    private _servicioClasificacion: ClasificacionService,
    private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._servicioClasificacion.get().subscribe((respuesta) => {
      this.clasificaciones = respuesta;
    });
  }

  verClasificacion(idClasificacion:any){
    this._router.navigate(['/clientes', idClasificacion]);
  }

  eliminarClasificacion(idClasificacion: any) {
    if (confirm('¿Está seguro que desea eliminar el cliente?')) {
      this._servicioClasificacion.eliminarClasificacion(idClasificacion).subscribe((respuesta) => {
        this.clasificaciones = this.clasificaciones.splice(1);
        this.recargar();
      });
    }
  }

  modificarClasificacion(idClasificacion: any) {
    this._router.navigate(['/clasificaciones/modificar/' + idClasificacion]);
  }

  recargar() {
    window.location.reload();
  }
}

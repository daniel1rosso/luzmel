import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClasificacionService } from 'src/app/service/clasificacion.service';

@Component({
  selector: 'app-modificar-clasificacion',
  templateUrl: './modificar-clasificacion.component.html',
  styleUrls: ['./modificar-clasificacion.component.css']
})
export class ModificarClasificacionComponent implements OnInit {
  clasificaciones:any = {};
  idClasificacion:any;
  constructor(
    private _activate: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _servicioClasificacion: ClasificacionService
  ) {
    this._activate.params.subscribe((parametros) => {
      this._servicioClasificacion
        .getClasificacion(parametros['idClasificacion'])
        .subscribe((respuesta) => {
          this.clasificaciones = respuesta;
          this.idClasificacion = parametros['idClasificacion']
        });
    });
   }

  ngOnInit(): void {
  }

  modificarClasificacion(miFormulario: NgForm) {
    let clasificacion: any = {};
    let idClasificacion: number;
    clasificacion.nombre = miFormulario.value.nombre;
    idClasificacion = this.idClasificacion;
    clasificacion.idClasificacion = this.idClasificacion;
    if (miFormulario.valid) {
      this._servicioClasificacion
        .modificarClasificacion(clasificacion, idClasificacion)
        .subscribe((respuesta) => {
          console.log(respuesta);
        });
      this._toastr.success('Modificación exitosa!', 'OK', { timeOut: 2500 });
      this._router.navigate(['/clasificaciones']);
    } else {
      alert('Revise los campos');
    }
    this._servicioClasificacion.getClasificaciones();
  }

}

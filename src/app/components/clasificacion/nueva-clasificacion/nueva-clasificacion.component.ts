import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClasificacionService } from 'src/app/service/clasificacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nueva-clasificacion',
  templateUrl: './nueva-clasificacion.component.html',
  styleUrls: ['./nueva-clasificacion.component.css']
})
export class NuevaClasificacionComponent implements OnInit {
  roles: string[];
  isAdmin = false;
  constructor(
    private _servicioClasificacion: ClasificacionService,
    private _router: Router,
    private _tokenService: TokenService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._servicioClasificacion.getClasificaciones();
  }

  guardar(miFormulario) {
    let clasificacion: any = {};
    clasificacion.nombre = miFormulario.value.nombre;
  
    if (miFormulario.valid) {
      this._servicioClasificacion.guardarClasificacion(clasificacion).subscribe((respuesta) => {
        console.log(respuesta);
      });
      console.log(clasificacion);
      this._toastr.info('Clasificacion Guardada con exito!', 'OK', {
        timeOut: 2500,
        positionClass: 'toast-top-center'
      });
      this._router.navigate(['/clasificaciones']);
    } else {
      alert('Revise los campos');
    }
  }

}

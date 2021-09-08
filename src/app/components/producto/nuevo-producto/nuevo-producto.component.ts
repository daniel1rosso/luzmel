import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../../service/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import{Clasificacion, ClasificacionService} from '../../../service/clasificacion.service'
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  clasificaciones:Clasificacion[]=[];
  roles: string[];
  isAdmin = false;


  constructor(
    private _servicioProducto:ProductoService,
    private _servicioClasificacion:ClasificacionService,
    private _router: Router,
    private _tokenService: TokenService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this._servicioClasificacion.get().subscribe((respuesta) => {
      this.clasificaciones = respuesta;
    });
  }

  guardar(miFormulario) {
    let producto: any = {};
    producto.nombre = miFormulario.value.nombre;
    producto.descripcion = miFormulario.value.descripcion;
    producto.precioUnitario = miFormulario.value.precioUnitario;
    producto.cantidadProducto = miFormulario.value.cantidadProducto;
    producto.clasificacion = miFormulario.value.clasificacion;

    if (miFormulario.valid) {
      this._servicioProducto.guardarProducto(producto).subscribe((respuesta) => {
        console.log(respuesta);
      });
      console.log(producto);
      this._toastr.info('Producto Guardado con exito!', 'OK', {
        timeOut: 2500,
        positionClass: 'toast-top-center'
      });
      this._router.navigate(['/productos']);
    } else {
      alert('Revise los campos');
    }
  }

}



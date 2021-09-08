import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clasificacion, ClasificacionService } from 'src/app/service/clasificacion.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  productos: any = {};
  clasificaciones: Clasificacion[] =[];
  idProducto:any

  constructor(
    private _activate: ActivatedRoute,
    private _servicioProducto: ProductoService,
    private _servicioClasificacion: ClasificacionService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this._activate.params.subscribe((parametros) => {
      this._servicioProducto
        .getProducto(parametros['idProducto'])
        .subscribe((respuesta) => {
          console.log(parametros)
          this.productos = respuesta;
          this.idProducto = parametros['idProducto']
        });
    });
  }

  ngOnInit(): void {
    this._servicioClasificacion.get().subscribe((respuesta) => {
      this.clasificaciones = respuesta;
    });
  }

  modificarProducto(miFormulario: NgForm) {
    let producto: any = {};
    let idProducto: any;
    console.log(miFormulario.form.value)
    producto.nombre = miFormulario.form.value.nombre;
    producto.descripcion = miFormulario.form.value.descripcion;
    producto.precioUnitario = miFormulario.form.value.precioUnitario;
    producto.cantidadProducto = miFormulario.form.value.cantidadProducto;
    producto.clasificacion = miFormulario.form.value.clasificacion;
    idProducto = this.idProducto;
    producto.idProducto = this.idProducto;
    if (miFormulario.valid) {
      this._servicioProducto
        .modificarProducto(producto, idProducto)
        .subscribe((respuesta) => {
          console.log(respuesta);
        });
      this._toastr.success('Modificación exitosa!', 'OK', { timeOut: 2500 });
      this._router.navigate(['/productos']);
    } else {
      alert('Revise los campos');
    }
  }
}



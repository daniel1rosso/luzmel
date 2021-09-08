import { Component, Input, OnInit } from '@angular/core';
import { Cliente, ClienteService } from 'src/app/service/cliente.service';
import { Producto, ProductoService } from 'src/app/service/producto.service';
import {Estado, EstadoService} from 'src/app/service/estado.service';
import { PresupuestoService } from 'src/app/service/presupuesto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {DetallePresupuestoService} from '../../../service/detalle-presupuesto.service'

@Component({
  selector: 'app-nuevo-presupuesto',
  templateUrl: './nuevo-presupuesto.component.html',
  styleUrls: ['./nuevo-presupuesto.component.css']
})
export class NuevoPresupuestoComponent implements OnInit {
  clientes:Cliente[]=[];
  productos:Producto[]=[];
  estados:Estado[]=[];

  presupuesto:any[] = [];
  presupuesto_:any = {};

  detallepresupuesto:any[] = [];
  detalle_presupuesto:any = {};

  constructor(
    private _servicioProducto:ProductoService,
    private _servicioCliente: ClienteService,
    private _servicioEstado: EstadoService,
    private _servicioPresupuesto: PresupuestoService,
    private _toastr: ToastrService,
    private _router: Router,
    private _servicioDetallePresupuesto: DetallePresupuestoService
  ) { }

  ngOnInit(): void {

    this._servicioCliente.get().subscribe((respuesta) => {
      this.clientes = respuesta;
    });

    this._servicioProducto.get().subscribe((respuesta) => {
      this.productos = respuesta;
    });

    this._servicioEstado.get().subscribe((respuesta) => {
      this.estados = respuesta;
    });
    
    this.presupuesto_.total = 0;
    this.presupuesto_.aux_flete = 0;
    this.presupuesto_.aux_descuento = 0;
    this.presupuesto_.aux_descuento_especial = 0;
  }

  agregar_producto()
  {
    if (this.detalle_presupuesto.cantidad != null && this.detalle_presupuesto.cantidad != 0 && this.detalle_presupuesto.producto != null){
      this.presupuesto = this.presupuesto_.total
      this.detallepresupuesto.push(this.detalle_presupuesto);
      this.presupuesto_.total = (this.presupuesto_.total + this.detalle_presupuesto.cantidad * this.detalle_presupuesto.producto.precioUnitario)
      this.detalle_presupuesto = {};
    }
  }

  eliminar_producto(i,valor){
    this.presupuesto = this.presupuesto_.total
    this.presupuesto_.total = this.presupuesto_.total - valor
    this.detallepresupuesto.splice(i,1)
  } 

  flete(){
    if (this.presupuesto_.flete != null) {
      this.presupuesto = this.presupuesto_.total
      this.presupuesto_.total = (this.presupuesto_.total - this.presupuesto_.aux_flete)
      this.presupuesto_.total = (this.presupuesto_.total + this.presupuesto_.flete)
      this.presupuesto_.aux_flete = (this.presupuesto_.flete)
    }
  }

  descuento(){
    if (this.presupuesto_.descuento != null) {
      this.presupuesto = this.presupuesto_.total
      var descuento = (this.presupuesto_.total * (this.presupuesto_.descuento / 100))
      this.presupuesto_.total = (this.presupuesto_.total + this.presupuesto_.aux_descuento)
      this.presupuesto_.total = (this.presupuesto_.total - descuento)
      this.presupuesto_.aux_descuento = descuento
    }
  }

  descuento_especial(){
    if (this.presupuesto_.descuento_especial != null) {
      this.presupuesto = this.presupuesto_.total
      this.presupuesto_.total = (this.presupuesto_.total + this.presupuesto_.aux_descuento_especial)
      this.presupuesto_.total = (this.presupuesto_.total - this.presupuesto_.descuento_especial)
      this.presupuesto_.aux_descuento_especial = (this.presupuesto_.descuento_especial)
    }
  }

  finalizar_presupuesto(){

    //console.log(this.detallepresupuesto)

    this.detallepresupuesto.forEach(element => {
      console.log(element.presupuesto =this.presupuesto)
    });

    console.log(this.detallepresupuesto)

  }

  guardarPresupuesto(miFormulario) {
    let presupuesto: any = {};
    delete this.presupuesto_.aux_descuento;
    delete this.presupuesto_.aux_descuento_especial;
    delete this.presupuesto_.aux_flete;
    presupuesto.precio = miFormulario.value.precio;
    presupuesto.descuento = miFormulario.value.descuento;
    presupuesto.flete = miFormulario.value.flete;
    presupuesto.descuentoEspecial = miFormulario.value.descuentoEspecial;
    presupuesto.cliente = miFormulario.value.cliente;
    presupuesto.estado = miFormulario.value.estado;
  
    if (miFormulario.valid) {
      this._servicioPresupuesto.guardarPresupuesto(presupuesto).subscribe((respuesta) => {
        console.log(respuesta);
        console.log(this.detallepresupuesto);

        this.detallepresupuesto.forEach(element => {
          element.precioFinal =element.producto.precioUnitario
          this._servicioDetallePresupuesto.guardarDetallePresupuesto(respuesta._id, element).subscribe((respuest) => {
            console.log(respuest);
          });
        });
      });
      this._toastr.info('Presupuesto Guardado con exito!', 'OK', {
        timeOut: 2500,
        positionClass: 'toast-top-center'
      });
      this._router.navigate(['/presupuestos']);
    } else {
      alert('Revise los campos');
    }
  }
  
}

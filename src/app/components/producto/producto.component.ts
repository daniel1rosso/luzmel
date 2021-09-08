import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/service/token.service';
import {Producto, ProductoService} from '../../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Producto[] = [];
  roles: string[];
  isAdmin = false;
  isUser = false;

  constructor(
    private _servicioProducto: ProductoService,
    private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
        this._servicioProducto.get().subscribe((respuesta) => {
          this.productos = respuesta;
        });
        console.log(this.productos)
  }

  verProducto(idProducto: any) {
    this._router.navigate(['/productos', idProducto]);
  }

  eliminarProducto(idProducto: any) {
    if (confirm('¿Está seguro que desea eliminar el producto?')) {
      this._servicioProducto.eliminarProducto(idProducto).subscribe((respuesta) => {
        this.productos = this.productos.splice(1);
        this.recargar();
      });
    }
  }

  modificarProducto(idProducto: any) {
    this._router.navigate(['/productos/modificar/' + idProducto]);
  }

  recargar() {
    window.location.reload();
  }

}

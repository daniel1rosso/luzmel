import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DetallePresupuesto,
  DetallePresupuestoService,
} from 'src/app/service/detalle-presupuesto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-detalles-presupuesto',
  templateUrl: './detalles-presupuesto.component.html',
  styleUrls: ['./detalles-presupuesto.component.css'],
})
export class DetallesPresupuestoComponent implements OnInit {
  detalles: DetallePresupuesto[] = [];
  roles: string[];
  isUser = false;
  isAdmin = false;
  constructor(
    private _detallePresupuestoService: DetallePresupuestoService,
    private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activate.params.subscribe((params) => {
      this._detallePresupuestoService
            .getDetallesPorPresupuesto(params.idPresupuesto)
            .subscribe((respuesta) => {
              this.detalles = respuesta;
            });
    });
  }
}

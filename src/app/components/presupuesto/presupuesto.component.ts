import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/service/token.service';
import {PresupuestoService, Presupuesto} from '../../service/presupuesto.service'

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  presupuestos:Presupuesto[] = [];
  roles: string[];
  isAdmin = false;
  isUser = false;

  constructor(
    private _servicioPresupuesto: PresupuestoService,
    private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute,
    private _toastr: ToastrService

  ) { }

  ngOnInit(): void {
        this._servicioPresupuesto.get().subscribe((respuesta) => {
          this.presupuestos = respuesta;
        });
  }

  verPresupuesto(idPresupuesto: number) {
    this._router.navigate(['/presupuestos', idPresupuesto]);
  }

  eliminarPresupuesto(idPresupuesto: number) {
    if (confirm('¿Está seguro que desea eliminar el presupuesto?')) {
      console.log(idPresupuesto);
      this._servicioPresupuesto.eliminarPresupuesto(idPresupuesto).subscribe((respuesta) => {
        this.presupuestos = this.presupuestos.splice(1);
        this.recargar();
      });
    }

  }
  modificarPresupuesto(idPresupuesto: number) {
    this._router.navigate(['/presupuestos/modificar/' + idPresupuesto]);
  }
  recargar() {
    window.location.reload();
  }

  verDetalles(idPresupuesto: number){
    console.log(idPresupuesto)
    // const params = new HttpParams().set("idComplejo", String(idComplejo));
    this._router.navigate(['presupuestos/detalles', idPresupuesto]);
  }

  verInforme(idPresupuesto: number){
    this._router.navigate(['presupuestos/informe', idPresupuesto]);
  }
}

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePresupuesto, DetallePresupuestoService } from 'src/app/service/detalle-presupuesto.service';
import { Presupuesto, PresupuestoService } from 'src/app/service/presupuesto.service';
import { TokenService } from 'src/app/service/token.service';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  detalles: DetallePresupuesto[] = [];
  presupuesto:Presupuesto;
  roles: string[];
  isUser = false;
  isAdmin = false;
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef;

  constructor(private _servicioPresupuesto : PresupuestoService, private _detallePresupuestoService : DetallePresupuestoService, private _router: Router,
    private _tokenService: TokenService,
    private _activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
    this.getPresupuesto();
  }

  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const pdfTable = this.pdfTable.nativeElement;

  //   var html = htmlToPdfmake(pdfTable.innerHTML);

  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open();
  // }

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }

  getDetails(){
    this._activate.params.subscribe((params) => {
      this._tokenService.getAuthorities();
      this.roles.forEach((rol) => {
        if (rol === 'ADMINISTRADOR') {
          this.isAdmin = true;
        } else {
          this.isUser = true;
          this._detallePresupuestoService
            .getDetallesPorPresupuesto(params.idPresupuesto)
            .subscribe((respuesta) => {
              this.detalles = respuesta;
            });
        }
      });
    });
  }


  getPresupuesto(){
  /*  this._activate.params.subscribe((params) => {
      this.roles = this._tokenService.getAuthorities();
      this.roles.forEach((rol) => {
        if (rol === 'ADMINISTRADOR') {
          this.isAdmin = true;
        } else {
          this.isUser = true;
            this._servicioPresupuesto.getPresupuesto(params.idPresupuesto).subscribe((res) => {
              this.presupuesto = res;
              console.log(this.presupuesto)
            });
        }
      });
    });*/
  }
}

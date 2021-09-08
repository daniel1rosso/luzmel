import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario : any = []
 

  constructor(private activate : ActivatedRoute, private servicioUsuario : UsuarioService) { 
    this.activate.params.subscribe((parametros) => {
       this.usuario = parametros['id'];
       this.servicioUsuario.guardarUsuario(parametros['id']).subscribe(respuesta => {
        this.usuario = respuesta;
      })
      });
      }
      ngOnInit(): void {
      }
      
      }
 
  
//revisar


//   turno: any = [];
//   constructor(private activate: ActivatedRoute,
//     private servicioTurno: TurnoService) {
// this.activate.params.subscribe((parametros) => {
// this.turno = parametros['id'];
// this.servicioTurno.getTurno(parametros['id']).subscribe(respuesta => {
//   this.turno = respuesta;
// })
// });
// }
// ngOnInit(): void {
// }




import { Rol } from '../service/roles.service';

export class Usuario {
    idUsuario:number;
    nombreUsuario : string;
  	apellidoUsuario : string;
    email: string;
    nombrePila: string;
    contra : string;
    telefonoUsuario:string;
    posicion:string;
    authorities: string[];
    roles: Set<Rol>;
}

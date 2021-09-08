import { Component, OnInit } from '@angular/core';

import{UrlService} from 'src/app/service/url.service'
import { Router } from '@angular/router';
import {LoginUsuario} from 'src/app/models/login-usuario'
import {TokenService} from 'src/app/service/token.service'
import {LoginService} from 'src/app/service/login.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;

  nombreUsuario: string;
  contra: string;

  roles: string[] =[];
  errMsj: string;

  constructor(private tokenService : TokenService,
    private urlService: UrlService,
    private loginService : LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.contra);

    this.loginService.login(this.loginUsuario).subscribe(
      data => {
        if(data.success ){
          this.isLogged = true;
          this.isLoginFail = false;

          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);

          this.tokenService.setId(data.id);
          this.router.navigate(['/home']);
        }else{
          this.isLogged = false;
          this.isLoginFail = true;
          this.router.navigate(['/']);
          console.log(data)
          Swal.fire({
            title: 'Usuario o Contraseña incorrecta',
            icon: 'warning',
            confirmButtonColor: "#F70C0C",
            confirmButtonText: 'Continuar',
          })
        }
      }
    )
  }
}

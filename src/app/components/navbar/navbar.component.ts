import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: string[];
  isAdmin = false;
  isUser = false;
  usuarioLog: String;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
  }
  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}

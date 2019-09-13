import { Component } from '@angular/core';
import { UserService } from '../servicios/usuario/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user =  '';
  pass = '';  

  constructor(
    private validar: UserService,
    private router: Router
  ) {}

  validarUsuario(){
    this.validar.validarUsuario(this.user, this.pass);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario = null;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.usuario);
  }

  goVerContrato(){
    this.router.navigate(['/contrato']);
  }
}

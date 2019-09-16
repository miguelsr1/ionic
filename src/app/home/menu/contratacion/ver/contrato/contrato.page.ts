import { Component, OnInit } from '@angular/core';
import { AnhoService } from 'src/app/servicios/catalogo/anho/anho.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage implements OnInit {
  idAnho: Number;
  idProcesoAdq: Number;
  idRubro: Number;

  lstAnho: any;
  lstProcesoAdq: any;
  lstRubroAdq: any;

  constructor(
    private anhoServicio: AnhoService
    ) { }

  ngOnInit() {
    this.anhoServicio.getLstAnho()
        .subscribe(
          data => {
            this.lstAnho = data['listado'];
        },
        err => {
            console.log(err);
        }
    );    
  }

  public onSelectAnho(){
    this.anhoServicio.getLstProcesoAdq(this.idAnho)
        .subscribe(
          data => {
            this.lstProcesoAdq = data['listado'];
          },err => {
            console.log(err);
          }
        );
  }

  public onSelectProceso(){
    this.anhoServicio.getLstRubroAdq(this.idProcesoAdq)
        .subscribe(
          data => {
            this.lstRubroAdq = data['listado'];
          },err => {
            console.log(err);
          }
        );
  }
}

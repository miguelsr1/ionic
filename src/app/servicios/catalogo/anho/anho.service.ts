import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnhoService implements OnInit {
    private api = 'http://aplicaciones.mined.gob.sv/paquescolar-web/webresources/servicios';
    

    constructor(
        private http: HttpClient
    ){}
    
    ngOnInit() {
        console.log('ok');
    }

    public getLstAnho(){
        return this.http.get(this.api+'/lstAnho');
    }

    public getLstProcesoAdq(idAnho: Number){
        return this.http.get(this.api + '/lstProcesoAdq?idAnho='+idAnho);
    }

    public getLstRubroAdq(idProcesoAdq: Number){
        return this.http.get(this.api + '/lstRubroAdq?idProcesoAdq='+idProcesoAdq);
    }
}
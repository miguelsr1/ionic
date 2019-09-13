import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private api = 'http://aplicaciones.mined.gob.sv/paquescolar-web/webresources/servicios';

    constructor(
        private http: HttpClient,
        public toastController: ToastController, 
        private router: Router
    ){}

    validarUsuario(user: string, pass: string){
        this.http.get(this.api+'/validarUsuario?user='+user+'&pass='+pass).subscribe(
            data => {
                const obj = (data as any);
                const objJson = obj;
                if(objJson['validar'] == true){
                    console.log('antes de enviar: ' + user);
                    this.router.navigate(['/menu', user]);
                }else{
                    console.log('error');
                    this.presentToast(objJson['msj']);
                }
            }, error => {
                this.presentToast('Servicio de validacion no disponible');
            }
        );
    }

    async presentToast(msj: string) {
        const toast = await this.toastController.create({
          message: msj,
          duration: 3000,
          showCloseButton: true
        });
        toast.present();
      }
}
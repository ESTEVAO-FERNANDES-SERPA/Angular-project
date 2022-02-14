import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

interface AuxProp  {
  data:Date;
  valor:number;
  destino:number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private services: TransferenciaService){

  }

  transferir($event: AuxProp){
    this.services.adicionar($event);

  }
}

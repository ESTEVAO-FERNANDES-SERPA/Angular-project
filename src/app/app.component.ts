import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private services: TransferenciaService){

  }

}

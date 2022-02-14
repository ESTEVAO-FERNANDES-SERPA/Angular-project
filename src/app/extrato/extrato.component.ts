import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
interface AuxProp  {
    data:Date;
    valor:number;
    destino:number;
};
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias!: AuxProp[];

  constructor(private services: TransferenciaService){

  }

  ngOnInit(): void {
    this.transferencias = this.services.transferencias
  }

}

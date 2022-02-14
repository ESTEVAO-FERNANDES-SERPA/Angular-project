import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
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

  @Input() transferencias!: Transferencia[];

  constructor(private services: TransferenciaService){

  }

  ngOnInit(): void {
    this.services.todas().subscribe((transferencias: Transferencia[])=>{
      console.log(transferencias);
      this.transferencias = transferencias
    })
  }

}

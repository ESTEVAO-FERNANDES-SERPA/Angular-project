import { Injectable } from '@angular/core';

interface AuxProp  {
  data:Date;
  valor:number;
  destino:number;
};

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private listaTransferencia: AuxProp[];

constructor() {
  this.listaTransferencia = [];
}

  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia:AuxProp ){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia:AuxProp){
    transferencia.data = new Date();
  }

}

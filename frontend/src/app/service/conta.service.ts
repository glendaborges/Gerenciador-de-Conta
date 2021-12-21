import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
  url ='http://localhost:3000/conta'

  constructor(private http:HttpClient, private router:Router) { }

  // listar todas as tarefas
  getTransferencia(){
    return this.http.get(this.url)
  }
  getId(id:any){
    return this.http.get(this.url + '/' + id)
  }

  // cadastrar tranferencia
  addTransferencia(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)
  }

  // deletar Trasferencia
  deletarTrans(id:any){
    return this.http.delete(this.url + '/' + id)
   }

   editTrans(id:any, transferencia:Transferencia){
     return this.http.put(this.url + '/' + id, transferencia)
   }

   

}

export interface Transferencia{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
  }


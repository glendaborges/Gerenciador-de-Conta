import { Component, OnInit } from '@angular/core';
import { Transferencia, ContaService } from 'src/app/service/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia:Transferencia ={
    id_transferencia:'',
    nomeCliente:'',
    valor:'',
    contaCliente:''
  }

  constructor(private ContaService:ContaService, private router:Router) { }

  ngOnInit() {
  }

  adicionar(){

    delete this.transferencia.id_transferencia

    this.ContaService.addTransferencia(this.transferencia).subscribe({
      next: (resultado) => console.log('tarefa cadastrada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })

    this.router.navigate(['/inicio'])
  }

}

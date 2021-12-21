import { Component, OnInit } from '@angular/core';
import { ContaService, Transferencia } from 'src/app/service/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTransferencias:Transferencia[]

  constructor( private ContaService:ContaService, private router:Router) {
    this.ListarTransferencias = []
  }



  ngOnInit() {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.ContaService.getTransferencia().subscribe({
      next:(resultado) =>{console.log(resultado)
                          this.ListarTransferencias =<any>resultado},
      error:(e) => console.error(e),
      complete: () =>console.info('complete')

    })
  }

  // função para excluir transferencia
  excluir(id:any){
    this.ContaService.deletarTrans(id).subscribe({
      next: (resultado) => {console.log(resultado)
                            this.listarTransferencias()},
      error:(erro) => console.log(erro),
      complete: ()=> console.info('complete')
    })
  }

  editar(id:any){
    this.router.navigate(['/edit/'+ id])
   }


}

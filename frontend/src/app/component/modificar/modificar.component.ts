import { Component, OnInit } from '@angular/core';
import { ContaService, Transferencia } from 'src/app/service/conta.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {


  transferencia: Transferencia={
    id_transferencia:'',
    contaCliente:'',
    nomeCliente:'',
    valor:''
  }

  constructor(private contaService:ContaService, private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    // const id_url = <any>this.activatedRoute.snapshot.params['id']
    // console.log(`id da url: ${id_url}`)

    // this.contaService.getId(id_url).subscribe({
    //   next: (resultado) =>{
    //                       console.log(resultado)
    //                       this.transferencia= resultado},
    //   error: (erro) => console.error(erro),
    //   complete: () => console.info('transferencia encontrada')
    // })
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    console.log("id de entrada:" + id_entrada)
    this.contaService.getId(id_entrada).subscribe({
      next: (resultado) => {
                 console.log(resultado)
                 this.transferencia= resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info("Conta encontrada!")
    })
  }

  modificar(){
    this.contaService.editTrans(this.transferencia.id_transferencia, this.transferencia).subscribe({
      next:(resultado) =>{console.log("transferência editada com sucesso")},
      error:(erro) => console.error(erro),
      complete: () => console.info('edição concluída')
    })
    this.router.navigate(['/inicio'])
  }


}

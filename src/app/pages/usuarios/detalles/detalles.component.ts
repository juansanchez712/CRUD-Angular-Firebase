import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.interface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  usuario: Usuario = null;
  valoresNavegacion: NavigationExtras = {
    state:{
      value: null
    }
  }

  constructor(private router:Router, private usuarioService: UsuarioService) {
    const estadoNavegacion = this.router.getCurrentNavigation();
    this.usuario = estadoNavegacion?.extras?.state.value;
   }

  ngOnInit(): void {
    if (typeof this.usuario === 'undefined'){
      this.router.navigate(['list']);
    }
  }

  onGoToEdit():void{
    this.valoresNavegacion.state.value = this.usuario;
    this.router.navigate(['editar'],this.valoresNavegacion);
  }

  async onGoToDelete(): Promise<void>{
    try {
      await this.usuarioService.onDelete(this.usuario.id);
      alert('Deleted');
      this.onGoBack();
    }catch(err){
      console.log(err);
    }
  }

  onGoBack():void{
    this.router.navigate(['lista']);
  }
}

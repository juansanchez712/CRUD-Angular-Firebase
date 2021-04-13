import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  valoresNavegacion: NavigationExtras = {
    state: {
      value: null
    }
  }

  usuarios$ = this.usuarioService.usuarios;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.valoresNavegacion.state.value = item;
    this.router.navigate(['editar'], this.valoresNavegacion);
  }

  onGoToSee(item: any): void {
    this.valoresNavegacion.state.value = item;
    this.router.navigate(['detalles'], this.valoresNavegacion);
  }

  async onGoToDelete(id: string): Promise<void> {
    try {
      await this.usuarioService.onDelete(id);
    }catch(err){
      console.log(err);
    }
    alert('Deleted');
  }
}

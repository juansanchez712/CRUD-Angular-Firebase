import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lista', loadChildren: () => import('./pages/usuarios/lista/lista.module').then(m => m.ListaModule) }, { path: 'nuevo', loadChildren: () => import('./pages/usuarios/nuevo/nuevo.module').then(m => m.NuevoModule) }, { path: 'detalles', loadChildren: () => import('./pages/usuarios/detalles/detalles.module').then(m => m.DetallesModule) }, { path: 'editar', loadChildren: () => import('./pages/usuarios/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

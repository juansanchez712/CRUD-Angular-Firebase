import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRoutingModule } from './nuevo-routing.module';
import { NuevoComponent } from './nuevo.component';
import { UsuarioFormModule } from 'src/app/shared/components/usuario-form/usuario-form.module';


@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    UsuarioFormModule
  ]
})
export class NuevoModule { }

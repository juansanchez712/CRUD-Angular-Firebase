import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioFormModule } from 'src/app/shared/components/usuario-form/usuario-form.module';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    ReactiveFormsModule,
    UsuarioFormModule
  ]
})
export class EditarModule { }

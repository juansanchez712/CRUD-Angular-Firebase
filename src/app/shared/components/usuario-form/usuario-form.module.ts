import { UsuarioFormComponent } from './usuario-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsuarioFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UsuarioFormComponent]
})
export class UsuarioFormModule { }

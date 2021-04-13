import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/pages/usuarios/usuario.service';
import { Usuario } from '../../models/usuario.interface';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  usuario:Usuario = null;
  usuarioForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router: Router, private fb: FormBuilder, private ServicioUsuarios : UsuarioService) {
    const estadoNavegacion = this.router.getCurrentNavigation();
    this.usuario = estadoNavegacion?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    if (typeof this.usuario === 'undefined'){
      this.router.navigate(['nuevo']);
    }else{
      this.usuarioForm.patchValue(this.usuario);
    }
  }

  onSave():void {
    console.log('Saved', this.usuarioForm.value);
    if (this.usuarioForm.valid) {
      const usuario = this.usuarioForm.value;
      const usuarioId = this.usuario?.id || null;
      this.ServicioUsuarios.onSave(usuario, usuarioId);
      this.usuarioForm.reset();
    }
  }

  private initForm():void{
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      identificacion: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    })
  }

  onGoBack():void {
    this.router.navigate(['lista']);
  }

}

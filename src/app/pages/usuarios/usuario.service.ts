import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Observable<Usuario[]>;
  private coleccionUsuarios: AngularFirestoreCollection<Usuario>;
  constructor(private readonly afs: AngularFirestore) {
    this.coleccionUsuarios = afs.collection<Usuario>('Usuarios');
    this.getUsuario();
   }

   onDelete(userId: string): Promise<void>{
     return new Promise(async (resolve, reject) => {
      try {
        const resultados = this.coleccionUsuarios.doc(userId).delete();
        resolve(resultados);   
      }catch(err){
        reject(err.message);
      }
     })
   }

   onSave(usuario: Usuario, userId:string): Promise<void>{
      return new Promise(async(resolve, reject) => {
        try {
          const id = userId || this.afs.createId();
          const data = {id, ...usuario};
          const resultados = await this.coleccionUsuarios.doc(id).set(data);
          resolve(resultados);
        }catch(err){
          reject(err.message);
        }
      })
   }

   private getUsuario(): void {
     this.usuarios = this.coleccionUsuarios.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Usuario))
     )
   }
}

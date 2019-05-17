import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Usuario} from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirebaseusuariosService {
  usuarios: Observable<{}>;
  usuarioSeleccionado: Usuario;

  constructor(public usuariosService: AngularFireDatabase) { }

  getAllUsers() {
   return this.usuarios = this.usuariosService.object('usuario').valueChanges();
  }

  setUsuarioSeleccionado(usuarioSeleccionado: Usuario) {
    this.usuarioSeleccionado = usuarioSeleccionado;
  }

  getUsuarioSeleccionado() {
    return this.usuarioSeleccionado;
  }
}

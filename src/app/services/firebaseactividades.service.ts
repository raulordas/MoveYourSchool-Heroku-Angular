import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Actividad} from '../interfaces/Actividad';

@Injectable({
  providedIn: 'root'
})
export class FirebaseactividadesService {
  actividad: Observable<{}>;
  actividadSeleccionada: Actividad;

  constructor(public db: AngularFireDatabase) {
  }

  pushActividad() {
    let id: string = this.db.createPushId();
    // this.db.object('actividades' + id).set(this.actividad);
    this.db.list('actividades').push(this.actividad);

  }

  getAllActividades() {
    return this.actividad = this.db.object('actividades').valueChanges();
  }

  setActividadSeleccionada(actividadSeleccionada: Actividad) {
    this.actividadSeleccionada = actividadSeleccionada;
  }

  getActividadSeleccionada() {
    return this.actividadSeleccionada;
  }
}

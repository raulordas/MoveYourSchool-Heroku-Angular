import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebasereservasService {
  private reservas: Observable<{}>;

  constructor(public reservasService: AngularFireDatabase) { }

  getAllUsers() {
    return this.reservas = this.reservasService.object('reservas').valueChanges();
  }
}

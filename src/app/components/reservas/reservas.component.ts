import { Component, OnInit } from '@angular/core';
import {FirebasereservasService} from '../../services/firebasereservas.service';
import {Reserva} from '../../interfaces/reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  public reservas: Reserva[] = [];

  constructor(public serviceReservas: FirebasereservasService) {

    this.serviceReservas.getAllUsers().subscribe(value => {
      for (let clave in value) {
        console.log(value[clave]);
        this.reservas.push(value[clave]);
      }
    });
  }

  ngOnInit() {
  }


}

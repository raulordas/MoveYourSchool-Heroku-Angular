import { Component, OnInit } from '@angular/core';
import {FirebaseactividadesService} from '../../services/firebaseactividades.service';
import {Actividad} from '../../interfaces/Actividad';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actividad-detalle',
  templateUrl: './actividad-detalle.component.html',
  styleUrls: ['./actividad-detalle.component.css']
})
export class ActividadDetalleComponent implements OnInit {
  actividadSeleccionada: Actividad;

  constructor(private serviceActividades: FirebaseactividadesService,
              private router: Router) {
    this.actividadSeleccionada = this.serviceActividades.getActividadSeleccionada();
  }

  ngOnInit() {
  }

  backToMenu() {
    this.router.navigate(['/actividades']);
  }

}

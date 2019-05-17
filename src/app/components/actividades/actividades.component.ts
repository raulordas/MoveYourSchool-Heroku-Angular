import { Component, OnInit } from '@angular/core';
import {FirebaseactividadesService} from '../../services/firebaseactividades.service';
import {Actividad} from '../../interfaces/Actividad';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  actividades: Actividad[] = [];
  loading: boolean = true;
  termino: string;


  constructor(private serviceActividades: FirebaseactividadesService,
              private router: Router) {
    this.termino = '';
    this.serviceActividades.getAllActividades().subscribe(resultado => {
      console.log(resultado);
      console.log(resultado[0])
      this.actividades = [];

      for (let clave in resultado) {
        console.log(resultado[clave]);
        for (let subclave in resultado[clave]) {
          this.checkShared(resultado[clave][subclave]);
          this.actividades.push(resultado[clave][subclave]);
        }
      }
      this.loading = false;
    });
  }

  setTermino(termino: string) {
    this.termino = termino;
  }

  ngOnInit() {
  }

  checkShared(actividad: Actividad) {
    if (actividad.urlFoto == null || actividad.urlFoto === '') {
      actividad.urlFoto =  'assets/images/demoactivity.jpg';
    }
  }

  verDetalles(id: string) {

    let aux = this.actividades.find((value, index, obj) => {
      return value.uid_actividad === id;
    });

    this.serviceActividades.setActividadSeleccionada(aux);
    this.router.navigate(['/actividades', id]);
  }

}

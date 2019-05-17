import { Pipe, PipeTransform } from '@angular/core';
import {Actividad} from '../interfaces/Actividad';

@Pipe({
  name: 'filterActividades'
})
export class FilterActividadesPipe implements PipeTransform {
  primeraVez: boolean = true;
  listAux: Actividad[];
  listFiltrada: Actividad[];

  transform(value: Actividad[], termino?: string): Actividad[] {
    this.listFiltrada = [];

    if (this.primeraVez) {
      console.log('entra');
      console.log(value);
      this.listAux = value;
      this.primeraVez = false;
    }
    this.listFiltrada = this.listAux.filter(value1 => {
      return value1.titulo.toLowerCase().indexOf(termino.toLowerCase()) > -1;
    });
    return this.listFiltrada;
  }

}

import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../interfaces/usuario';
import {FirebaseusuariosService} from '../../services/firebaseusuarios.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  private usuarioDetalle: Usuario;

  constructor(private serviceUsuarios: FirebaseusuariosService) {
    this.usuarioDetalle = this.serviceUsuarios.getUsuarioSeleccionado();
    console.log(this.usuarioDetalle);
  }

  ngOnInit() {
  }

  backToMenu() {

  }

}

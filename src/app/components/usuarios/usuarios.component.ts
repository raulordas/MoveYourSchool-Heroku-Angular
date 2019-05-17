import { Component, OnInit } from '@angular/core';
import {FirebaseusuariosService} from '../../services/firebaseusuarios.service';
import {Usuario} from '../../interfaces/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private serviceUsuarios: FirebaseusuariosService,
              private router: Router) {
    this.serviceUsuarios.getAllUsers().subscribe(value => {
      for (let clave in value) {
        console.log(value[clave]);
        this.usuarios.push(value[clave]);
      }

    });
  }

  ngOnInit() {
  }

  verDetalle(userIndex: number) {
    this.serviceUsuarios.setUsuarioSeleccionado(this.usuarios[userIndex]);
    this.router.navigate(['/usuarios', this.usuarios[userIndex].uid]);
  }


}

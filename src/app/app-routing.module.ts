import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/shared/login/login.component';
import {SecurityService} from './services/security.service';
import {ActividadesComponent} from './components/actividades/actividades.component';
import {ActividadDetalleComponent} from './components/actividad-detalle/actividad-detalle.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {ReservasComponent} from './components/reservas/reservas.component';
import {UsuarioDetalleComponent} from './components/usuario-detalle/usuario-detalle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'actividades', component: ActividadesComponent},
  { path: 'actividades/:id', component: ActividadDetalleComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'usuarios/:id', component: UsuarioDetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

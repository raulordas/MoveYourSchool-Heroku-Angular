import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/shared/login/login.component';
import {SecurityService} from './services/security.service';
import { ActividadesComponent } from './components/actividades/actividades.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseactividadesService} from './services/firebaseactividades.service';
import { FilterActividadesPipe } from './pipes/filter-actividades.pipe';
import { ActividadDetalleComponent } from './components/actividad-detalle/actividad-detalle.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import {FirebaseusuariosService} from './services/firebaseusuarios.service';
import { ReservasComponent } from './components/reservas/reservas.component';
import {FirebasereservasService} from './services/firebasereservas.service';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ActividadesComponent,
    FilterActividadesPipe,
    ActividadDetalleComponent,
    UsuariosComponent,
    ReservasComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    SecurityService,
    FirebaseactividadesService,
    FirebaseusuariosService,
    FirebasereservasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

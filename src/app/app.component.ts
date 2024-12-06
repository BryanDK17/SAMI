import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { HistorialComponent } from './components/historial/historial.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAMI';
}

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "historial", component: HistorialComponent },
  { path: "recomendaciones", component: RecomendacionesComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "configuracion", component: ConfiguracionComponent }
]
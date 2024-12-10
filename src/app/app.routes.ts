import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { RegistroComponent } from './components/registro/registro.component';


export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "historial",
        component: HistorialComponent
    },
    {
        path: "recomendaciones",
        component: RecomendacionesComponent
    },
    {
        path: "noticias",
        component: NoticiasComponent
    },
    {
        path: "configuracion",
        component: ConfiguracionComponent
    },
    {
        path: "registro",
        component: RegistroComponent
    }
];

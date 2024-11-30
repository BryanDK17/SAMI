import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';



export const routes: Routes = [

    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "configuracion",
        component: ConfiguracionComponent
    },
    {
        path: "historial",
        component: HistorialComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "noticias",
        component: NoticiasComponent
    },
    {
        path: "recomendaciones",
        component: RecomendacionesComponent
    }
];

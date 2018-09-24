import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component'
import { RegistroguiaComponent } from './registroguia/registroguia.component';
import { RegistroturistaComponent } from './registroturista/registroturista.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { Component } from '@angular/core';
import { IniciarComponent } from './iniciar/iniciar.component';
import { FichatourComponent } from './fichatour/fichatour.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'iniciar', component: IniciarComponent },
    { path: "registroguia", component: RegistroguiaComponent },
    { path: "registroturista", component: RegistroturistaComponent },
    // { path: "listatours", component:ListatoursComponent  },
    { path: "resultado-busqueda/:ciudad/:categoria", component: ResultadoBusquedaComponent },
    { path: 'fichatour/:id', component: FichatourComponent }
]
import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component'
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component'




export const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent, },
    { path: "resultado-busqueda", component: ResultadoBusquedaComponent }
        
    
]
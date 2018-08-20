import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { RegistroturistaComponent } from './registroturista/registroturista.component';
import { RegistroguiaComponent } from './registroguia/registroguia.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultadoBusquedaComponent,
    RegistroturistaComponent,
    RegistroguiaComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

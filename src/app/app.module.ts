import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';
import { RegistroturistaComponent } from './registroturista/registroturista.component';
import { RegistroguiaComponent } from './registroguia/registroguia.component';
import { FichatourComponent } from './fichatour/fichatour.component';
import { IniciarComponent } from './iniciar/iniciar.component';
// import { ListatoursComponent } from './listatours/listatours.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MainComponent,
    ResultadoBusquedaComponent,
    RegistroturistaComponent,
    RegistroguiaComponent,
    FichatourComponent,
    IniciarComponent,
    // ListatoursComponent,
    
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

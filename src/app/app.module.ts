import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadaComponent } from './portada/portada.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { NieblaComponent } from './niebla/niebla.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    NieblaComponent,
    LoginComponent,
    ContactoComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

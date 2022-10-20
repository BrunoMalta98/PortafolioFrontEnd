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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { interceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperieciaComponent } from './experiencia/editar-experiecia.component';
import { NuevaEduComponent } from './educacion/nueva-edu.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditSkillComponent } from './habilidades/edit-skill.component';
import { NuevoSkillComponent } from './habilidades/nuevo-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditProyectoComponent } from './proyectos/edit-proyecto.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto.component';

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
    PortfolioComponent,
    RegistroComponent,
    NuevaExperienciaComponent,
    EditarExperieciaComponent,
    NuevaEduComponent,
    EditEducacionComponent,
    EditAcercaDeComponent,
    EditSkillComponent,
    NuevoSkillComponent,
    EditProyectoComponent,
    NuevoProyectoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    
    
    
    
  ],
  providers: [

    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

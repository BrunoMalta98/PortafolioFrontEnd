import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperieciaComponent } from './experiencia/editar-experiecia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [

{path:'portfolio',component:PortfolioComponent},
{path:'login',component:LoginComponent},
{path:'',redirectTo:'portfolio',pathMatch:'full'},
{path:'registro',component:RegistroComponent},
{path:'nuevaExperiencia',component: NuevaExperienciaComponent},
{path:'editExperiencia/:id',component: EditarExperieciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



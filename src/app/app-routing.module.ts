import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NuevaEduComponent } from './educacion/nueva-edu.component';
import { EditarExperieciaComponent } from './experiencia/editar-experiecia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditSkillComponent } from './habilidades/edit-skill.component';
import { NuevoSkillComponent } from './habilidades/nuevo-skill.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto.component';



const routes: Routes = [

{path:'portfolio',component:PortfolioComponent},
{path:'login',component:LoginComponent},
{path:'',redirectTo:'portfolio',pathMatch:'full'},
{path:'nuevaExperiencia',component: NuevaExperienciaComponent},
{path:'editExperiencia/:id',component: EditarExperieciaComponent},
{path:'nuevaEducacion',component:NuevaEduComponent},
{path:'editEducacion/:id',component:EditEducacionComponent},
{path:'editAcercaDe/:id',component: EditAcercaDeComponent},
{path:'nuevaSkill',component:NuevoSkillComponent},
{path:'editSkill/:id',component:EditSkillComponent},
{path:'nuevoProyecto',component:NuevoProyectoComponent},
{path:'editProyecto/:id',component:EditProyectoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { ExperienciaServService } from '../servicios/experiencia-serv.service';

@Component({
  selector: 'app-editar-experiecia',
  templateUrl: './editar-experiecia.component.html',
  styleUrls: ['./editar-experiecia.component.css']
})
export class EditarExperieciaComponent implements OnInit {

  experienciaLab : Experiencia = null;
  

  constructor(private servExperienciaService : ExperienciaServService,
     private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperienciaService.detail(id).subscribe(data =>{

      this.experienciaLab = data;
    }, err => {

      alert("Error al modificar experiencia");
      this.router.navigate(['']);

    })

  }

  onUpdate(): void {


    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperienciaService.update(id, this.experienciaLab).subscribe(data =>{

      this.router.navigate(['']);

    }, err => {

      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })


  }

}

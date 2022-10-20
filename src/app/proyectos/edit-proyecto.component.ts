import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto : Proyecto = null;
  constructor(private servProyectoService:ProyectoService ,private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servProyectoService.detail(id).subscribe(data =>{

      this.proyecto = data;
    }, err => {

      alert("Error al modificar educacion");
      this.router.navigate(['']);

    })
  } 

  onUpdate(): void {


    const id = this.activatedRouter.snapshot.params['id'];
    this.servProyectoService.update(id, this.proyecto).subscribe(data =>{

      this.router.navigate(['']);

    }, err => {

      alert("Error al modificar educacion");
      this.router.navigate(['']);
    })


  }


}

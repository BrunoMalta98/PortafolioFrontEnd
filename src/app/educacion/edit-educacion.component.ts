import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { EducacionServService } from '../servicios/educacion-serv.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educ : Educacion = null;
  

  constructor(private servEducacionService : EducacionServService ,
     private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacionService.detail(id).subscribe(data =>{

      this.educ = data;
    }, err => {

      alert("Error al modificar educacion");
      this.router.navigate(['']);

    })

  }

  onUpdate(): void {


    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacionService.update(id, this.educ).subscribe(data =>{

      this.router.navigate(['']);

    }, err => {

      alert("Error al modificar educacion");
      this.router.navigate(['']);
    })


  }
 
}

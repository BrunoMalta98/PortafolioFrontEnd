import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { persona } from '../model/persona.model';
import { ImageService } from '../servicios/image.service';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  Persona : persona = null;
  
  constructor(public imageService: ImageService ,private personaServ: PersonaService,private activatedRouter : ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServ.detail(id).subscribe(data =>{

      this.Persona = data;
    }, err => {

      alert("Error al modificar AcercaDe");
      this.router.navigate(['']);

    })

  }

 
  onUpdate(): void {


    const id = this.activatedRouter.snapshot.params['id'];
    this.Persona.img = this.imageService.url;
    this.personaServ.update(id, this.Persona).subscribe(data =>{

      this.router.navigate(['']);

    }, err => {

      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })


  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);

  }




}

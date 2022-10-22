import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../model/educacion';
import { EducacionServService } from '../servicios/educacion-serv.service';
import { ImageService } from '../servicios/image.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit {

  

  titulacion : string = '';
  institucion: string = '';
  descripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  imgInsti: string = '';

  constructor(private imageService: ImageService,private activatedRouter: ActivatedRoute,private educacionServ: EducacionServService, private router: Router ) { }

  ngOnInit(): void {


  }
  
  onCreate(): void{
    const edu = new Educacion( this.titulacion, this.institucion, this.descripcion, this.fechaInicio, this.fechaFin, this.imgInsti );
    
    this.educacionServ.save(edu).subscribe(
      data => {
      alert("Educacion creada con exito");
      this.router.navigate(['']);


    },err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }
  

 
}
 
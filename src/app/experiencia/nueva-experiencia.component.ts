import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { ExperienciaServService } from '../servicios/experiencia-serv.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreE : string = '';
  puesto: string = '';
  descripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
 
  imgEmpresa: string = '';


  constructor(private experienciaService: ExperienciaServService, private router: Router  ) { }



  ngOnInit(): void {
  }


  onCreate(): void{
    const xp = new Experiencia(this.nombreE,this.puesto, this.descripcion, this.fechaInicio, this.fechaFin,  this.imgEmpresa);
    this.experienciaService.save(xp).subscribe(
      data => {
      alert("Experiencia creada con exito");
      this.router.navigate(['']);


    },err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }

 
}

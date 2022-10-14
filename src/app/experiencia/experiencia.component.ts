import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaServService } from '../servicios/experiencia-serv.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  experiencia: Experiencia[] = [];
  constructor(private experienciaServ: ExperienciaServService, private tokenService: TokenService)  { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){

      this.isLogged = true;

    } else {

      this.isLogged = false;

    }
  
  }


  cargarExperiencia(): void {

    this.experienciaServ.lista().subscribe(data => {this.experiencia = data;})

  }


  borrar(id?: number){

    if(id != undefined){
      this.experienciaServ.delete(id).subscribe(data => {this.cargarExperiencia()},
      
      err =>{

        alert("No se puede borrar la experiencia")
      })
    }

  }


}

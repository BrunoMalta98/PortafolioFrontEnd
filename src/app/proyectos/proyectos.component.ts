import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {

    this.cargarProyecto();
    if(this.tokenService.getToken()){

      this.isLogged = true;

    } else {

      this.isLogged = false;
 
    }
  }

  cargarProyecto(): void {

    this.proyectoService.lista().subscribe(
      data => {
        this.proyectos = data;
      }
    )

  }

  delete(id: number) {

    if(id != undefined){
      this.proyectoService.delete(id).subscribe(data => {this.cargarProyecto()},
      
      err =>{

        alert("No se puede borrar la skill")
      })
    }

  }

}

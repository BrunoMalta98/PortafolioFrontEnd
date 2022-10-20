import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../servicios/skill.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skill: Skill[] = []; 
  constructor(private skillService: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){

      this.isLogged = true;

    } else {

      this.isLogged = false;
 
    }
  }

  cargarSkill(): void {

    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }
    )

  }

  delete(id: number) {

    if(id != undefined){
      this.skillService.delete(id).subscribe(data => {this.cargarSkill()},
      
      err =>{

        alert("No se puede borrar la skill")
      })
    }

  }

}

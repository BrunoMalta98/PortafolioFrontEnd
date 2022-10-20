import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../servicios/skill.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit {

nombreS: string;
porcentaje : number;

  constructor(private skils: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const skill = new Skill(this.nombreS, this.porcentaje);
    this.skils.save(skill).subscribe(
      data => {
        alert("Skill creada con exito");
      this.router.navigate(['']);
      },err => {
        alert("Fallo");
        this.router.navigate(['']);
      })
    

  }

}

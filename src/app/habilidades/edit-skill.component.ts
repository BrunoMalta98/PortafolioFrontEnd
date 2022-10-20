import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../servicios/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill : Skill = null;

  constructor(private skillService: SkillService, private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data =>{

      this.skill = data;
    }, err => {

      alert("Error al modificar experiencia");
      this.router.navigate(['']);

    })
  }

  
  onUpdate(): void {


    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(data =>{

      this.router.navigate(['']);

    }, err => {

      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })


  }

}

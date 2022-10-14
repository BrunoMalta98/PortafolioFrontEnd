import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { AcercadeService } from '../servicios/acercade.service';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  
 persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {

    
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    

  }


}
 

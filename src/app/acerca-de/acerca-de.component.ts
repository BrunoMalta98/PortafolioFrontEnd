import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';

import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  Persona: persona = null;

  constructor(private personaServ: PersonaService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){

      this.isLogged = true;

    } else {

      this.isLogged = false;

    }

  }

  cargarPersona(): void {

    this.personaServ.detail(1).subscribe(data => {this.Persona = data;})

  }

  
}
 

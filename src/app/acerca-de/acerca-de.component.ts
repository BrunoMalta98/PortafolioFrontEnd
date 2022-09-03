import { Component, OnInit } from '@angular/core';
import { AcercadeService } from '../servicios/acercade.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  
 

  constructor(private SobreMi:AcercadeService) { }

  ngOnInit(): void {

    
    this.SobreMi.obtenerDatosSobreMi();
    

  }


}
 

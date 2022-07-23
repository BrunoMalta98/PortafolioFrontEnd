import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-niebla',
  templateUrl: './niebla.component.html',
  styleUrls: ['./niebla.component.css']
})
export class NieblaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  /*ocultarNiebla(){

    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function(){

      let desplazamiento = window.pageYOffset;
      if(ubicacionPrincipal>= desplazamiento){

        document.getElementById('navbar').style.top = '0';

      }
      ubicacionPrincipal = desplazamiento;
    }

  }*/
    
  
}

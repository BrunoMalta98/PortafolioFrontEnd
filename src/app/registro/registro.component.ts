import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 

    this.form=this.formBuilder.group(
      {

        nombre:['',Validators.required,Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        

    })
  }

  ngOnInit(): void {
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){

    event.preventDefault;
    this.autenticacionService.Login(this.form.value).subscribe(data =>{

      console.log("DATA" + JSON.stringify(data));
      this.ruta.navigate(['/login']);
    })
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ImageService } from '../servicios/image.service';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  nombreP: string;
  lenguajes: string;
  link: string;
  descripcion: string;
  imgP: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private proyecto: ProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreP,
      this.lenguajes,
      this.link,
      this.descripcion,
      this.imgP
    );

    this.proyecto.save(proyecto).subscribe(
      (data) => {
        alert('Proyecto creado con exito');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const name = 'proyecto_' + this.imgP;
    this.imageService.uploadImage($event, name);
  }
}

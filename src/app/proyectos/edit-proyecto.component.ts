import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ImageService } from '../servicios/image.service';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(
    public imageService: ImageService,
    private servProyectoService: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servProyectoService.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        alert('Error al modificar educacion');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imageService.url;
    this.servProyectoService.update(id, this.proyecto).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar educacion');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }
}

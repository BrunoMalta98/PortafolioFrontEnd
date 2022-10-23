export class Proyecto {
  id?: number;
  nombreP: string;
  lenguajes: string;
  link: string;
  descripcion: string;
  imgP: string;

  constructor(
    nombreP: string,
    lenguajes: string,
    link: string,
    descripcion: string,
    imgP: string
  ) {
    this.nombreP = nombreP;
    this.lenguajes = lenguajes;
    this.link = link;
    this.descripcion = descripcion;
    this.imgP = imgP;
  }
}

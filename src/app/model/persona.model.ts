export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  titulo: string;
  universidades: string;
  descripcion: string;
  img: string;

  constructor(
    nombre: string,
    apellido: string,
    titulo: string,
    universidades: string,
    descripcion: string,
    img: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.universidades = universidades;
    this.descripcion = descripcion;
    this.img = img;
  }
}

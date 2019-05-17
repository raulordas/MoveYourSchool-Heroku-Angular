export interface Actividad {
  aseos: boolean;
  cafeteria: boolean;
  categoria: string;
  descripcion: string;
  direccion: string;
  disponible: boolean;
  duracion: number;
  likes: number;
  localidad: string;
  maxPlazas: number;
  minPlazas: number;
  municipio: string;
  notLikes: number;
  personasDiversidad: boolean;
  precio: number;
  riesgoAccidente: boolean;
  titulo: string;
  uid_actividad: string;
  uid_usuario: string;
  urlFoto?: string;
}

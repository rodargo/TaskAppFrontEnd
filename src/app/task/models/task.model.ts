

    // "id": 1,
    // "titulo": "LAVAR EL CARRO",
    // "descripcion": "LAVAR EL CARRO CON JAVON SUAVE",
    // "estado": 0,
    // "fechaCreacion": "2025-01-20T23:28:03.815742Z",
    // "fechaActualizacion": "2025-01-20T23:28:03.81577Z"

export interface ITask {
  id: number;
  titulo: string;
  descripcion: string;
  estado: number;
  fechaCreacion: string;
  fechaActualizacion: string;
  usuarioId: number;
}

export interface ITaskAddEdit {
  titulo: string;
  descripcion: string;
}




export interface Animal {
    id: number; // crece por cada animal nuevo.
    nombre: string;
    tipo: string; // perro, gato, otro
    raza: string;
    genero: string; // macho, hembra
    tamaño: string; // pequeño, mediano, grande
    fechaNacimiento: Date;
    foto: string; // URL de la foto del animal
    adoptado: boolean; // true si el animal ha sido adoptado, false si no
    vacunada: boolean; // true si el animal ha sido vacunado, false si no
    descripcion?: string; // descripción opcional del animal
}

export function edadAnimal(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < fechaNacimiento.getMonth() ||
        (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return Math.max(0, edad);
}

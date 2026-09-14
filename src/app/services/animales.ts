import { Injectable, signal } from '@angular/core';
import { Animal } from '../model/animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalesService {
    private animaleslist = signal<Animal[]>([
        {id: 1, nombre: 'Firulais', tipo: 'perro', raza: 'Labrador', genero: 'macho', tamaño: 'grande', fechaNacimiento: new Date('2020-01-01'), foto: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: false, vacunada: true, descripcion: 'Un perro muy amigable y juguetón.'},
        {id: 2, nombre: 'Mittens', tipo: 'gato', raza: 'Siamés', genero: 'hembra', tamaño: 'pequeño', fechaNacimiento: new Date('2021-05-15'), foto: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: true, vacunada: true, descripcion: 'Una gata muy cariñosa y tranquila.'},
        {id: 3, nombre: 'Rex', tipo: 'perro', raza: 'Pastor Alemán', genero: 'macho', tamaño: 'grande', fechaNacimiento: new Date('2019-08-20'), foto: 'https://images.unsplash.com/photo-1605725657590-b2cf0d31b1a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: false, vacunada: false, descripcion: 'Un perro muy protector y leal.'},
        {id: 4, nombre: 'Whiskers', tipo: 'gato', raza: 'Persa', genero: 'macho', tamaño: 'mediano', fechaNacimiento: new Date('2022-03-10'), foto: 'https://plus.unsplash.com/premium_photo-1726769007510-7a26e51e9f86?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: false, vacunada: true, descripcion: 'Un gato muy juguetón y curioso.'},
        {id: 5, nombre: 'Bella', tipo: 'perro', raza: 'Bulldog', genero: 'hembra', tamaño: 'mediano', fechaNacimiento: new Date('2021-11-05'), foto: 'https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: true, vacunada: true, descripcion: 'Una perra muy dulce y amigable.'},
        {id: 6, nombre: 'Morita', tipo: 'gato', raza: 'Siberiano', genero: 'hembra', tamaño: 'pequeño', fechaNacimiento: new Date('2020-05-18'),foto: 'https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', adoptado: true, vacunada: true, descripcion: 'Una gata muy juguetona y cariñosa.'},
    ]);

    readonly todas = this.animaleslist.asReadonly();

    obtenerAnimal(id: number): Animal | undefined {
        return this.animaleslist().find((animal) => animal.id === id);
    }

    agregarAnimal(datos: Omit<Animal, 'id' | 'adoptado'>): Animal {
        const id = Math.max(0, ...this.animaleslist().map((animal) => animal.id)) + 1;
        const animal: Animal = { ...datos, id, adoptado: false };
        this.animaleslist.update((animales) => [...animales, animal]);
        return animal;
    }

    marcarAdoptado(id: number): void {
        this.animaleslist.update((animales) =>
            animales.map((animal) => animal.id === id ? { ...animal, adoptado: true } : animal)
        );
    }
}

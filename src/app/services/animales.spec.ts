import { TestBed } from '@angular/core/testing';
import { AnimalesService } from './animales';

describe('AnimalesService', () => {
  let service: AnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalesService);
  });

  it('agrega una mascota disponible y permite consultarla', () => {
    const iniciales = service.todas().length;
    const animal = service.agregarAnimal({
      nombre: 'Rocky', tipo: 'perro', raza: 'Labrador', genero: 'macho',
      tamaño: 'grande', fechaNacimiento: new Date('2024-01-01'),
      foto: 'https://example.com/rocky.jpg', vacunada: true,
    });

    expect(service.todas().length).toBe(iniciales + 1);
    expect(service.obtenerAnimal(animal.id)).toEqual(animal);
    expect(animal.adoptado).toBe(false);
  });

  it('actualiza el estado de adopción', () => {
    service.marcarAdoptado(1);
    expect(service.obtenerAnimal(1)?.adoptado).toBe(true);
  });
});

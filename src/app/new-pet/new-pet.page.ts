import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonToggle } from '@ionic/angular';
import { AnimalesService } from '../services/animales';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.page.html',
  styleUrls: ['./new-pet.page.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, IonContent, IonInput, IonButton, IonSegment, IonSegmentButton, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonToggle]
})
export class NewPetPage {
  private animalesService = inject(AnimalesService);
  private router = inject(Router);

  foto = '';
  nombre = '';
  tipo: 'perro' | 'gato' | 'otro' = 'perro';
  edad: number | null = null;
  raza = '';
  genero = 'hembra';
  tamano = 'mediano';
  vacunada = false;
  descripcion = '';
  error = '';

  get fotoValida(): boolean {
    try {
      const url = new URL(this.foto.trim());
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }

  guardar(): void {
    const edad = Number(this.edad);
    if (!this.nombre.trim() || !this.fotoValida || this.edad === null ||
        !Number.isInteger(edad) || edad < 0 || edad > 30) {
      this.error = 'Ingresa un nombre, una URL de foto válida y una edad entre 0 y 30 años.';
      return;
    }

    this.error = '';
    const fechaNacimiento = new Date();
    fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() - edad);
    const animal = this.animalesService.agregarAnimal({
      nombre: this.nombre.trim(),
      foto: this.foto.trim(),
      tipo: this.tipo,
      raza: this.raza.trim() || this.tipo,
      genero: this.genero,
      tamaño: this.tamano,
      fechaNacimiento,
      vacunada: this.vacunada,
      descripcion: this.descripcion.trim(),
    });
    void this.router.navigate(['/adopta', animal.id]);
  }
}

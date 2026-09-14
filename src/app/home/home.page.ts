import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonBadge, IonFab, IonFabButton } from '@ionic/angular';
import { edadAnimal } from '../model/animal.model';
import { AnimalesService } from '../services/animales';

type Filtro = 'todos' | 'disponibles' | 'adoptados';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonBadge, IonFab, IonFabButton],
})
export class HomePage {
  private animalesService = inject(AnimalesService);

  readonly animales = this.animalesService.todas;
  readonly disponibles = computed(() => this.animales().filter((animal) => !animal.adoptado).length);
  readonly filtro = signal<Filtro>('todos');
  readonly filtrados = computed(() => this.animales().filter((animal) =>
    this.filtro() === 'todos' ||
    (this.filtro() === 'disponibles' && !animal.adoptado) ||
    (this.filtro() === 'adoptados' && animal.adoptado)
  ));
  readonly edad = edadAnimal;
}

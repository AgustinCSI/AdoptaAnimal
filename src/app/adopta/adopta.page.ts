import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonImg, IonChip, IonButton, IonBadge } from '@ionic/angular';
import { edadAnimal } from '../model/animal.model';
import { AnimalesService } from '../services/animales';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.page.html',
  styleUrls: ['./adopta.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonImg, IonChip, IonButton, IonBadge]
})
export class AdoptaPage {
  private route = inject(ActivatedRoute);
  private animalesService = inject(AnimalesService);

  readonly id = Number(this.route.snapshot.paramMap.get('id'));
  readonly animal = computed(() => this.animalesService.obtenerAnimal(this.id));
  readonly edad = edadAnimal;

  marcarAdoptado(): void {
    this.animalesService.marcarAdoptado(this.id);
  }
}

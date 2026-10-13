import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Conferance } from '../services/conferance';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  private conferanceService = inject(Conferance);
  private router = inject(Router);

  id = input.required<string>();

  conference = computed(() =>
    this.conferanceService.getById(Number(this.id()))
  );

  sInscrire() {
    // ici on pourrait enregistrer l'inscription (traitement métier)
    this.router.navigate(['/confirmation', this.id()]);
  }
}
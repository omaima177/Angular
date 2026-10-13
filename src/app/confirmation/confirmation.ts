import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Conferance } from '../services/conferance';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {
  private route = inject(ActivatedRoute);
  private conferanceService = inject(Conferance);

  id = toSignal(
    this.route.paramMap.pipe(map(p => Number(p.get('id')))),
    { initialValue: 0 }
  );

  conference = computed(() => this.conferanceService.getById(this.id()));
}
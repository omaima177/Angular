import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Conferance } from '../services/conferance';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  private conferanceService = inject(Conferance);
  conferances = this.conferanceService.getAll();

  inc() {
    alert('increment');
  }
}
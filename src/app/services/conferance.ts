import { Injectable } from '@angular/core';

export interface ConferanceModel {
  id: number;
  name: string;
  date: string;
  place: string;
}

@Injectable({
  providedIn: 'root',
})
export class Conferance {
  private conferances: ConferanceModel[] = [
    { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
    { id: 2, name: 'react', date: '2023-02-01', place: 'sousse' },
    { id: 3, name: 'vue', date: '2023-03-01', place: 'Djerba' },
  ];

  getAll(): ConferanceModel[] {
    return this.conferances;
  }

  getById(id: number): ConferanceModel | undefined {
    return this.conferances.find(c => c.id === id);
  }
}
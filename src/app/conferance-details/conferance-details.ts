import { Component, input, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
//  conf = input<any>() 
//    increment = output();
//  inc(){
//  this.increment.emit();
//  }


///ActivatedRoute
// id:any;
// constructor(private ar:ActivatedRoute) {
// this.id=this.ar.snapshot.params['id'];
// console.log(this.id);
// }

id = input.required<string>();
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  getCurentDate(){
     var current = new Date();
     return current;

  }
}

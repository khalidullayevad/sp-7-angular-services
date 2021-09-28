import { Component, OnInit } from '@angular/core';
import {DateService} from "../date.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers : [DateService]
})
export class DateComponent implements OnInit {


  constructor(private dataService: DateService){}
  ngOnInit(){
    return this.dataService.getCurentDate();

  }

}

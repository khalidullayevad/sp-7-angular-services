import { Component, OnInit } from '@angular/core';
import {SumService} from "../sum.service";
import {DateService} from "../date.service";

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
  providers : [SumService]
})
export class SumComponent implements OnInit {
  sum=0;
  a=0;
  b=0;

  h=0
  constructor(private sumService: SumService){}
  sumA(event: any) {
    this.a = event.target.a ;
  }


  sumB(event: any) {
    this.b = event.target.b;
  }
  getSum(){
    this.sum=this.sumService.getSum(this.a,this.b)
    return this.sum;
  }
  ngOnInit(): void {

  }

}

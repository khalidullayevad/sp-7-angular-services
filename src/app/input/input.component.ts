import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  values ="";
  ngOnInit(): void {
  }
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  }

}

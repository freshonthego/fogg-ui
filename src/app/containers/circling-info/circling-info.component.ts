import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circling-info',
  templateUrl: './circling-info.component.html',
  styleUrls: ['./circling-info.component.scss']
})
export class CirclingInfoComponent implements OnInit {

  infos = [{
    name: 'Refer and Earn',
    style: {'background-color': '#edce68', 'text-align': 'center'}
  },
  {
    name: 'Subscribe and Save',
    style: {'background-color': '#d0f788', 'text-align': 'center'}
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

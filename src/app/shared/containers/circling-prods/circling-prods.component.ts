import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circling-prods',
  templateUrl: './circling-prods.component.html',
  styleUrls: ['./circling-prods.component.scss']
})
export class CirclingProdsComponent implements OnInit {

  products = [0, 1, 2, 3, 4, 5, 6, 7]

  constructor() { }

  ngOnInit(): void {
  }

}

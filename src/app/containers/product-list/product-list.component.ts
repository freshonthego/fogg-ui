import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  columnsPerRow = 5;
  rows: any;
  columnArray: any;
  columnCtr = 0;

  constructor() { }

  ngOnInit(): void {
    this.rows = [];
    this.columnArray = [];
    this.columnCtr = 0;
    this.productList.forEach((product, index) => {
      if (this.columnCtr < this.columnsPerRow) {
        this.columnArray.push(product);
        this.columnCtr = this.columnCtr + 1;
      } else {
        this.rows.push(this.columnArray);
        this.columnArray = [];
        this.columnCtr = 1;
        this.columnArray.push(product);
      }
    });
    const emptyCols = this.columnsPerRow - this.columnCtr;
    for (let i = 0; i < emptyCols; i++) {
      this.columnArray.push('null');
    }
    this.rows.push(this.columnArray);

  }

  ngOnDestroy(): void {
    this.rows = [];
    this.columnArray = [];
    this.columnCtr = 0;
  }

}

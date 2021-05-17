import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-purchase',
  templateUrl: './quick-purchase.component.html',
  styleUrls: ['./quick-purchase.component.scss']
})
export class QuickPurchaseComponent implements OnInit {

  categories = [
    {category: 'rice', selected: false },
    {category: 'sugar', selected: false },
    {category: 'salt', selected: false },
    {category: 'masala', selected: false },
    {category: 'pulses', selected: false },
    {category: 'ready to eat', selected: false },
    {category: 'healthy', selected: false },
    {category: 'dry fruits', selected: false },
    {category: 'atta & flours', selected: false },
    {category: 'pooja items', selected: false },
    {category: 'snacks & sweets', selected: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectionChange(i: number): void {
    this.categories[i].selected = !this.categories[i].selected;
  }

}

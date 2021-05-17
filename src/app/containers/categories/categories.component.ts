import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = ['Rice', 'Pulses', 'Flours', 'Sugar & Salt', 'Beverages', 'Dry Fruits', 'Masala', 'Pooja items',
'Snacks', 'Millets', 'Appliances'];

  highlight!: number;

  constructor(@Inject(Router) private router: any) { }


  ngOnInit(): void { }

  selected(id: number): void {
    this.highlight = id;
    this.router.navigate(['/productlist']);
  }

  categoryClass(id: number): any {
    if (id === this.highlight) {
      return {
        category: true,
        categoryHighlight: true
      };
    } else {
      return {
        category: true,
        categoryHighlight: false
      };
    }
  }
}

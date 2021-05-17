import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  products = [0, 1, 2, 3, 4];

  constructor(@Inject(Router) private router: Router) { }

  ngOnInit(): void {
  }

  toBilling(): any {
    this.router.navigate(['/billing']);
  }

}

import { OnInit, Component, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { trigger, style, animate, transition, sequence } from '@angular/animations';
import { Subscription } from 'rxjs';
import { AppdataService } from './shared/services/appdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('addToBasket', [
      transition('false => true', sequence([
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '3.5rem'})),
        style({fontSize: '3.5rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '3rem'})),
        style({fontSize: '3rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '2.5rem'})),
        style({fontSize: '2.5rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
      ])),
      transition('true => false', sequence([
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '3.5rem'})),
        style({fontSize: '3.5rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '3rem'})),
        style({fontSize: '3rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
        style({fontSize: '2.25rem'}), animate('100ms linear', style({fontSize: '2.5rem'})),
        style({fontSize: '2.5rem'}), animate('100ms linear', style({fontSize: '2.25rem'})),
      ]))
    ]),
  ]
})
export class AppComponent implements OnInit {

  productSubscription!: Subscription;
  basketVisible = false;
  animateBasket = false;
  fabBasket = true;
  basketProducts = [0, 1, 2, 3, 4];

  constructor(@Inject(AppdataService) private appDataService: any, @Inject(Router) private router: any ) {
    this.productSubscription = this.appDataService.productAdded.subscribe((data: any) => {
      this.animateBasket = !this.animateBasket;
    });
    router.events.subscribe((event: any) => {
      if (this.router.url === '/basket' || this.router.url === '/billing') {
        this.fabBasket = false;
      } else {
        this.fabBasket = true;
      }
    });
  }

  ngOnInit(): void {
  }

  showBasket(): void {
    this.basketVisible = !this.basketVisible;
  }

  toBasket(): void {
    this.router.navigate(['/basket']);
    this.basketVisible = false;
  }

}

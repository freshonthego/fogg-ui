import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(Router) private router: any) { }

  ngOnInit(): void {
  }

  navigateTo(target: string): void {
    this.router.navigate([target]);
  }

}

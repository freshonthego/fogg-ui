import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(Router) private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(target: string): void {
    this.router.navigate([target]);
  }

}

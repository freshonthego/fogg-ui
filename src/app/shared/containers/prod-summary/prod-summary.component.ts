import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppdataService } from './../../services/appdata.service';

@Component({
  selector: 'app-prod-summary',
  templateUrl: './prod-summary.component.html',
  styleUrls: ['./prod-summary.component.scss']
})
export class ProdSummaryComponent implements OnInit {

  @Input() name!: string;
  @Input() cost!: string;
  @Input() url!: string;

  constructor(@Inject(AppdataService) private dataService: any, @Inject(Router) private router: any ) { }

  ngOnInit(): void {
  }

  productAdded(): void {
    this.dataService.productAdded.emit(true);
  }

  goToProdDetails(): void {
    this.router.navigate(['/prodDetails']);
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { AppdataService } from './../../shared/services/appdata.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  constructor(@Inject(AppdataService) private dataService: any) { }

  ngOnInit(): void {
  }

  productAdded(): void {
    this.dataService.productAdded.emit(true);
  }

}

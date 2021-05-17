import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @ViewChild('region') region!: ElementRef;
  searchText: any;
  regionButton = true;
  regionSelected = false;
  regionList = false;
  regionText = '';
  regions = ['Markham', 'Richmond Hill', 'Scarborough', 'Brampton', 'Mississauga']
  serviceOptions = [{label: 'Delivery', value: 'delivery'}, {label: 'Pickup', value: 'pickup'}];
  serviceSelected = '';
  deliveryService = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editRegion(): void {
    this.regionButton = false;
    this.regionList = true;
    this.regionSelected = false;
    setTimeout(() => {
      this.region.nativeElement.focus();
    }, 0);
  }

  focusoutHandler(): void {
    if (this.regionText.length === 0 || !(this.regions.includes(this.regionText))) {
      this.regionButton = true;
      this.regionList = false;
      this.regionSelected = false;
    } else {
      this.regionButton = false;
      this.regionList = false;
      this.regionSelected = true;
    }
  }

}

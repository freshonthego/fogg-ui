import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  paymentOptions = [{label: 'Cash On Delivery', value: 'cod'}, {label: 'Online Payment', value: 'onlinePayment'}];
  paymentSelected = '';
  orderText = '';

  constructor() { }

  ngOnInit(): void {
  }

  paymentModeSelected(): void {
    console.log(this.paymentSelected);
    if (this.paymentSelected === 'cod') {
      this.orderText = 'Place Order';
    }
    if (this.paymentSelected === 'onlinePayment') {
      this.orderText = 'Pay Now';
    }
  }

}

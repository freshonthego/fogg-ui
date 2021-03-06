import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProdDetailsComponent } from './containers/prod-details/prod-details.component';
import { BasketComponent } from './containers/basket/basket.component';
import { BillingComponent } from './containers/billing/billing.component';
import { QuickPurchaseComponent } from './containers/quick-purchase/quick-purchase.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { TncComponent } from './containers/tnc/tnc.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { ContactComponent } from './containers/contact/contact.component';

const routes: Routes = [
  {path: 'productlist', component: ProductListComponent },
  {path: 'home', component: HomeComponent },
  {path: 'prodDetails', component: ProdDetailsComponent },
  {path: 'basket', component: BasketComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'quickPurchase', component: QuickPurchaseComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'tnc', component: TncComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

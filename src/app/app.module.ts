import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './containers/header/header.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CirclingInfoComponent } from './containers/circling-info/circling-info.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProdSummaryComponent } from './shared/containers/prod-summary/prod-summary.component';
import { ProdDetailsComponent } from './containers/prod-details/prod-details.component';
import { CirclingProdsComponent } from './shared/containers/circling-prods/circling-prods.component';
import { BasketComponent } from './containers/basket/basket.component';
import { BillingComponent } from './containers/billing/billing.component';
import { QuickPurchaseComponent } from './containers/quick-purchase/quick-purchase.component';
import { FooterComponent } from './containers/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CirclingInfoComponent,
    HomeComponent,
    ProductListComponent,
    ProdSummaryComponent,
    ProdDetailsComponent,
    CirclingProdsComponent,
    BasketComponent,
    BillingComponent,
    QuickPurchaseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    CarouselModule,
    CardModule,
    SelectButtonModule,
    DialogModule,
    ScrollPanelModule,
    InputNumberModule,
    CheckboxModule,
    ChipModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

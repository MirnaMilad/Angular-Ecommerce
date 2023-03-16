import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/ui/services/services.component';
import { ProductsComponent } from './components/ui/products/products.component';
import { ProductListComponent } from './components/ui/product-list/product-list.component';
import { ProductCardComponent } from './components/ui/product-card/product-card.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { TimeCountComponent } from './components/ui/time-count/time-count.component';
import { ClockComponent } from './components/ui/clock/clock.component';
import { CommonSectionComponent } from './components/common-section/common-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShopComponent,
    FooterComponent,
    ServicesComponent,
    ProductsComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    TimeCountComponent,
    ClockComponent,
    CommonSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

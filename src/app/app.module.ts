import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from '../app/image/shared/filter.pipe';

import { OwlModule } from 'ngx-owl-carousel';
import { IsotopeModule } from 'ngx-isotope';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

 @NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DashboardComponent,
    ShopComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    IsotopeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

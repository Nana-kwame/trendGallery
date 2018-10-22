import { HomeComponent } from './../home/home.component';
import { AppComponent } from './../app.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CategoriesComponent } from './../categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/:category',
    component:  ShopComponent
  },
  {
    path: 'category/:id',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

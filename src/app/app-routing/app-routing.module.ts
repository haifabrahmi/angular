import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from '../home/home.component';
import { AddProductComponent } from '../add-product/add-product.component';

const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'add',component:AddProductComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
})
export class AppRoutingModule { }

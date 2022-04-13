import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsComponent,
    ProductsComponent,
    ServicesComponent,
    MediaComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }

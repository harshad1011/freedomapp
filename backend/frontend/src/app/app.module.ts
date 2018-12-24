import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { CollectionsComponent } from './collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SliderComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

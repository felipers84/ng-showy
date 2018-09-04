import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ItemSlideComponent } from './item-slide/item-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ItemSlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

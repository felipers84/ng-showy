import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { PaginaslideComponent } from './paginaslide/paginaslide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    PaginaslideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

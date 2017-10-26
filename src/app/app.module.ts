import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarOwnersModule } from './car-owners/car-owners.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarOwnersModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

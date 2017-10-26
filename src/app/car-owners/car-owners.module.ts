import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service'
import { CarOwnerDataService } from './car-owner-data.service';

import { CarOwnersComponent } from './car-owners.component';
import { CarOwnersFormComponent } from './car-owners-form/car-owners-form.component';
import { CarOwnersListComponent } from './car-owners-list/car-owners-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CarOwnersComponent,
    CarOwnersListComponent,
    CarOwnersFormComponent
  ],
  exports: [
    CarOwnersListComponent,
    CarOwnersComponent,
    CarOwnersFormComponent
  ],
  providers: [CarOwnerDataService, ApiService]
})
export class CarOwnersModule { }

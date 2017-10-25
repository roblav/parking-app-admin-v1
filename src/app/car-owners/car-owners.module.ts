import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarOwnersComponent } from './car-owners.component';
import { CarOwnersFormComponent } from './car-owners-form/car-owners-form.component';
import { CarOwnersListComponent } from './car-owners-list/car-owners-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
  ]
})
export class CarOwnersModule { }

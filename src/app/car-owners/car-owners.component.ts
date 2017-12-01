import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarOwnerDataService } from './car-owner-data.service';

import { CarOwner } from './shared/car-owner.model';
import { Vehicle } from './shared/vehicle.model';

@Component({
  selector: 'car-owners',
  templateUrl: './car-owners.component.html',
  styleUrls: ['./car-owners.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnersComponent implements OnInit, OnChanges {

  carReg: string = "";
  carOwners: CarOwner[] = [];
  carOwnersOrig: CarOwner[] = [];
  editCarOwner: CarOwner;

  vehicle: Vehicle = new Vehicle();
  default: CarOwner = new CarOwner()

  model: CarOwner = JSON.parse(JSON.stringify(this.default));

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnChanges() {
    this.getAllcarOwners();
  }

  ngOnInit() {
    this.getAllcarOwners();
  }

  /*___ CRUD ___*/

  //Create
  addCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .addCarOwner(carOwner)
      .subscribe(
        (_) => {
          this.getAllcarOwners();
        }
      );
  }

  //Read
  getAllcarOwners() {
    this.carOwnerDataService
    .getAllCarOwners()
    .subscribe(
      (carOwners) => {
        this.carOwners = carOwners;
      }
    )
  }

  //Update
  /*___ Car Form Listen events ___*/

  onUpdateCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .updateCarOwner(carOwner)
      .subscribe(
        (_) => {
          this.getAllcarOwners();
        }
      );
  }

  //Delete
  onDeleteCarOwner(id: string) {
    this.carOwnerDataService
    .deleteCarOwnerById(id)
    .subscribe(
      (_) => {
        this.carOwners = this.carOwners.filter((co) => co.id !== id)
      }
    )
  }

  /*___ Car List Listen events ___*/
  onEditCarOwner(id: string) {
    let carOwner = this.carOwners.filter((co) => co.id === id).pop();
    this.model = Object.assign({}, carOwner);
  }

  /*___ Car Reg Search Form ___*/
  onSearchCarReg(id: string) {
    this.carOwnerDataService
      .getCarOwnerById(id)
      .subscribe(
        (carOwner) => {
          this.carOwners = [carOwner]
        }
      )
  }

  onClearSearchCarReg(){
    this.getAllcarOwners();
    //Clear input
    this.carReg = "";
  }

  onSkypeAlertCarOwner(name: String){
    //do nothing
  }
}

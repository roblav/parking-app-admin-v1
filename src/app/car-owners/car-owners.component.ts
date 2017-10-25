import { Component, OnInit } from '@angular/core';
//import * as data from './db.json';
import { FormsModule } from '@angular/forms';
import { CarOwnerDataService } from './car-owner-data.service';

import { CarOwner } from './shared/car-owner.model';
import { Person } from './shared/person.model';
import { Vehicle } from './shared/vehicle.model'

//const carOwners = (<any>data).carOwners;
//console.log(carOwners[0]); // output 'testing' 

@Component({
  selector: 'car-owners',
  templateUrl: './car-owners.component.html',
  styleUrls: ['./car-owners.component.css'],
  providers: [CarOwnerDataService]
})
export class CarOwnersComponent implements OnInit {

  carReg: string = "";
  carOwners: CarOwner[] = []
  carOwnersOrig: CarOwner[] = []

  person: Person = new Person();
  vehicle: Vehicle = new Vehicle();
  default: CarOwner = {
        _id: 0,
        person: this.person,
        vehicles:[this.vehicle]
      }

  model: CarOwner = this.default;
  //carOwners: CarOwner[] = carOwners

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnInit() {
    this.updateCarOwnersArray();
  }

  updateCarOwnersArray(){
    this.carOwners = this.getAllcarOwners();
  }

  //Create
  addCarOwner() {
    this.carOwnerDataService.addCarOwner(this.model);
    this.model = this.default
  }
  //Read
  getAllcarOwners() {
    return this.carOwnerDataService.getAllCarOwners();
  }
  //Update
  updateCarOwner(id: number, carOwner: CarOwner) {
    this.carOwnerDataService.updateCarOwnerById(id, carOwner);
  }
  //Delete
  deleteCarOwner(id: number) {
    this.carOwnerDataService.deleteCarOwnerByID(id);
  }

  onEditCarOwner(id: number) {
    let carOwner = this.carOwners
      .filter((co) => co._id === id)
      .pop();
    this.model = Object.assign({}, carOwner);

    //this.updateCarOwnersArray();
  }

  onCloseForm(state: boolean) {
    //Set model to default
    this.model = this.default;
  }

  onSearchCarReg() {
    //console.log(this.carReg)
    if(this.carReg !== ""){
      this.carOwnersOrig = this.carOwners;
      //loop over each carOwner object
      let carSearch = this.carOwners.filter((co) => co.vehicles.filter((vehicle) => vehicle.reg === this.carReg).pop()).pop();
      this.carOwners = [carSearch]
    }
    else if (this.carOwnersOrig !== []){
      this.carOwners = this.carOwnersOrig;
    }
    
  }

  onClearSearchCarReg(){
    this.carOwners = this.carOwnersOrig;
    //Clear input
    this.carReg = "";
  }
}

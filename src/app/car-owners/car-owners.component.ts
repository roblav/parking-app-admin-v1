import { Component, OnInit, OnChanges } from '@angular/core';
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
export class CarOwnersComponent implements OnInit, OnChanges {

  carReg: string = "";
  carOwners: CarOwner[] = [];
  carOwnerTest: CarOwner;
  carOwnersOrig: CarOwner[] = []
  editCarOwner: CarOwner;

  person: Person = new Person();
  vehicle: Vehicle = new Vehicle();
  default: CarOwner = {
        id: "",
        name: "",
        mobileNumber: "",
        workNumber: "",
        emailAddress: "",
        building: "",
        floor: 0,
        seat: "",
        vehicles:[this.vehicle]
      }

  model: CarOwner = JSON.parse(JSON.stringify(this.default));

  constructor(private carOwnerDataService: CarOwnerDataService) { }

  ngOnChanges() {
    this.updateCarOwnersArray();
  }

  ngOnInit() {
    this.updateCarOwnersArray();
  }

  /*___ Helper Method ___*/

  updateCarOwnersArray(){
    //this.carOwners = this.getAllcarOwners();
    this.carOwnerDataService
    .getAllCarOwners()
    .subscribe(
      (carOwners) => {
        console.log(JSON.parse(carOwners["_body"]).carOwners)
        this.carOwners = JSON.parse(carOwners["_body"]).carOwners;
      }
    )
  }

  /*___ CRUD ___*/

  //Create
  //addCarOwner(carOwner) {
  //  this.carOwnerDataService.addCarOwner(carOwner);
  //}

  addCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .addCarOwner(carOwner)
      .subscribe(
        (_) => {
          //this.updateCarOwnersArray();
        }
      );
  }
  //Read
  getAllcarOwners() {
    return this.carOwnerDataService.getAllCarOwners();
  }
  //Update
  updateCarOwner(id: string, carOwner: CarOwner) {
    this.carOwnerDataService.updateCarOwnerById(id, carOwner);
  }
  //Delete
  //deleteCarOwner(id: number) {
  //  this.carOwnerDataService.deleteCarOwnerByID(id);
  //}

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

    //this.updateCarOwnersArray();
  }

  /*___ Car Form Listen events ___*/

  onUpdateCarOwner(carOwner: CarOwner){
    this.carOwnerDataService
      .updateCarOwner(carOwner)
      .subscribe(
        (_) => {
          this.updateCarOwnersArray();
        }
      );
  }

  /*___ Car Reg Search Form ___*/

  onSearchCarReg() {
    //console.log(this.carReg)
    if(this.carReg !== ""){
      this.carOwnersOrig = this.carOwners;
      //loop over each carOwner object
      let carSearch = this.carOwners.filter((co) => co.vehicles.filter((vehicle) => vehicle.regNo === this.carReg).pop()).pop();
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

  onSkypeAlertCarOwner(name: String){
    //do nothing
  }
}

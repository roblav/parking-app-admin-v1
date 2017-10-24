import { Injectable } from '@angular/core';
import { CarOwner } from './shared/car-owner.model';
import { Person } from './shared/person.model';
import { Vehicle } from './shared/vehicle.model'

import * as data from './db.json';

const carOwnerData = (<any>data).carOwners;

@Injectable()
export class CarOwnerDataService {
// Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  carOwners: CarOwner[] = [];

  constructor() { }

  //CREATE Simulate POST /carowners
  addCarOwner(carOwner){
    if(!carOwner._id){
      carOwner._id = ++this.lastId;
      console.log(carOwner._id)
    }

    this.carOwners.push(carOwner);
    return this;
  }

  // READ Simulate GET /carowners
  getAllCarOwners(): CarOwner[] {
    this.carOwners = carOwnerData
    return this.carOwners
  }

  // UPDATE Simulate PUT /carowners
  updateCarOwnerById(id: number, values: Object = {}): CarOwner {
    let carOwner = this.getCarOwnerById(id)
    if (!carOwner){
      return null;
    }
    Object.assign(carOwner, values);
    return carOwner;
  }

  // DELETE Simulate DELETE /carowner/:id
  deleteCarOwnerByID(id) {
    this.carOwners = this.carOwners
      .filter(carOwner => carOwner._id !== id)
    return this;
  }

  // Simulate GET /carowner/:id
  getCarOwnerById(id): CarOwner {
    return this.carOwners
      .filter(carOwner => carOwner._id === id)
      .pop()
  }

}

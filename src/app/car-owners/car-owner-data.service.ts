import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

import { CarOwner } from './shared/car-owner.model';
import { Vehicle } from './shared/vehicle.model'

import * as data from './db.json';

const carOwnerData = (<any>data).carOwners;

@Injectable()
export class CarOwnerDataService {
// Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 10;

  carOwners: CarOwner[] = [];

  constructor(private api: ApiService) { }

  //CREATE Simulate POST /carowners
  addCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    return this.api.createCarOwner(carOwner);
  }

  // READ Simulate GET /carowners
  getAllCarOwners(): Observable<CarOwner[]> {
    return this.api.getAllCarOwners();
  }

  // UPDATE Simulate PUT /carowners
  updateCarOwnerById(id: string, values: Object = {}): CarOwner {

    //console.log(id)
    let carOwner = this.getCarOwnerById(id)
    //console.log(id)
    if (!carOwner){
      return null;
    }
    Object.assign(carOwner, values);
    return carOwner;
  }

  // Simulate PUT /carowners
  updateCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    return this.api.createCarOwner(carOwner);
  }

  // DELETE Simulate DELETE /carowner/:id
  deleteCarOwnerById(id): Observable<null> {
    //this.carOwners = this.carOwners
    //  .filter(carOwner => carOwner.id !== id)
    //return this;
    return this.api.deleteCarOwnerById(id);
  }

  // Simulate GET /carowner/:id
  getCarOwnerById(id): CarOwner {
    console.log(this.carOwners)
    return this.carOwners
      .filter(carOwner => carOwner.id === id)
      .pop()
  }

}

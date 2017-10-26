import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { CarOwner } from './car-owners/shared/car-owner.model'
import * as data from './car-owners/db.json';

const carOwnerData = (<any>data).carOwners;
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  
  /*___ CRUD ___*/
  
  // CREATE API: POST /todos
  public createCarOwner(carOwner: CarOwner) {
    // will use this.http.post()
  }

  // READ API: GET /todos

  //parking/carOwnerId/The%20Park%20Knight

  public getAllCarOwners(): Observable<CarOwner[]> {
    //this.http.get()
    // return this.http
    //   .get(API_URL + 'parking/The%20Park%20Knight')
    //   .catch(this.handleError)
    return Observable.of(carOwnerData);
  }

  // UPDATE API: PUT /todos/:id
  public updateCarOwner(carOwner: CarOwner) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteCarOwnerById(carOwnerId: number) {
    // will use this.http.delete()
  }

  // API: GET /todos/:id
  public getCarOwnerById(carOwnerId: number) {
    // will use this.http.get()
    //parking/carOwnerId //The%20Park%20Knight
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

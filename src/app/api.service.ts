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
  public createCarOwner(carOwner: CarOwner): Observable<CarOwner> {
    // will use this.http.post()
    //console.log(JSON.stringify(carOwner))
    return this.http
      .post(API_URL + '/parking', carOwner)
      .map(response => null)
      .catch(this.handleError)
  }

  // READ API: GET /todos

  //parking/carOwnerId/The%20Park%20Knight

  public getAllCarOwners(): Observable<CarOwner[]> {
    //this.http.get()
    return this.http
      .get(API_URL + '/parking')
      .catch(this.handleError)
    //return Observable.of(carOwnerData);
  }

  // DELETE /todos/:id
  public deleteCarOwnerById(id: string): Observable<null> {
    console.log(id)
    return this.http
      .delete(API_URL + '/parking/' + id)
      .map(response => console.log(response))
      .catch(this.handleError);
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

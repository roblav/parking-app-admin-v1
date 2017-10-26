import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CarOwner } from './car-owners/shared/car-owner.model'

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
  public getAllCarOwners() {
    // will use this.http.get()
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
  }
}

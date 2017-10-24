import { Component, OnInit } from '@angular/core';
import * as data from './db.json';
import { FormsModule } from '@angular/forms';

import { CarOwner } from './shared/car-owner.model';

const carOwners = (<any>data).carOwners;
console.log(carOwners[0]); // output 'testing' 

@Component({
  selector: 'car-owners',
  templateUrl: './car-owners.component.html',
  styleUrls: ['./car-owners.component.css']
})
export class CarOwnersComponent implements OnInit {

  model: CarOwner = carOwners[0]

  carOwners: CarOwner[] = carOwners

  constructor() { }

  ngOnInit() {
  }

}

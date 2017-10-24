import { Component, OnInit, Input } from '@angular/core';
import { CarOwner } from '../shared/car-owner.model'

@Component({
  selector: 'car-owners-list',
  templateUrl: './car-owners-list.component.html',
  styleUrls: ['./car-owners-list.component.css']
})
export class CarOwnersListComponent implements OnInit {

  @Input() carOwners: CarOwner[]

  constructor() { }

  ngOnInit() {
  }

}

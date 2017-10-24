import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarOwner } from '../shared/car-owner.model'

@Component({
  selector: 'car-owners-list',
  templateUrl: './car-owners-list.component.html',
  styleUrls: ['./car-owners-list.component.css']
})
export class CarOwnersListComponent implements OnInit {

  @Input() carOwners: CarOwner[]

  @Output() edit: EventEmitter<CarOwner> = new EventEmitter()
  @Output() delete: EventEmitter<CarOwner> = new EventEmitter()
  @Output() skypeAlert: EventEmitter<CarOwner> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  editCarOwner(id){ this.edit.emit(id) }
  deleteCarOwner(id){ this.delete.emit(id) }
  skypeCarOwner(name){ this.skypeAlert.emit(name) }

}

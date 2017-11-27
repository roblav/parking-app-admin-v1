import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarOwner } from '../shared/car-owner.model'

@Component({
  selector: 'car-owners-list',
  templateUrl: './car-owners-list.component.html',
  styleUrls: ['./car-owners-list.component.css']
})
export class CarOwnersListComponent implements OnInit {

  deleteCarID: string;

  @Input() carOwners: CarOwner[]

  @Output() edit: EventEmitter<CarOwner> = new EventEmitter()
  @Output() delete: EventEmitter<String> = new EventEmitter()
  @Output() skypeAlert: EventEmitter<CarOwner> = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  editCarOwner(id){ this.edit.emit(id) }
  deleteCarOwner(id){
    this.deleteCarID = id
  }
  confirmDelete(){
    this.delete.emit(this.deleteCarID) 
  }
  dismissDelete(){
    this.deleteCarID = ""
  }
  skypeCarOwner(name){ this.skypeAlert.emit(name) }

}

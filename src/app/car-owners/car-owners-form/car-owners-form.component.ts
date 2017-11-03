import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarOwner } from '../shared/car-owner.model';
import { Person } from '../shared/person.model';
import { Vehicle } from '../shared/vehicle.model'

@Component({
  selector: 'car-owners-form',
  templateUrl: './car-owners-form.component.html',
  styleUrls: ['./car-owners-form.component.css']
})
export class CarOwnersFormComponent implements OnInit, OnChanges {

  editMode: boolean = false;
  person: Person = new Person();
  vehicle: Vehicle = new Vehicle();
  default: CarOwner = {
        id: "0",
        person: this.person,
        vehicles:[this.vehicle]
      }
  //Make sure that we not passing object by reference. Just copy object values
  model = JSON.parse(JSON.stringify(this.default));

  @Input()  updateCarOwner: CarOwner
  @Output() add: EventEmitter<CarOwner> = new EventEmitter();
  @Output() edit: EventEmitter<CarOwner> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    if(this.updateCarOwner.id !== "0"){
      this.model = JSON.parse(JSON.stringify(this.updateCarOwner));
      this.editMode = true
    }
    else {
      this.editMode = false
    }
    //console.log('Edit Mode: '+this.editMode);
  }

  ngOnInit() {
  }

  //Closing the form should reset the model to default CarOwner
  onClose() {
    //this.close.emit(true)
    this.model = JSON.parse(JSON.stringify(this.default));
  }

  onSubmit() {
    if(this.editMode) {
      this.editCarOwner()
    } else {
      this.addCarOwner();
    }
  }

  addCarOwner() {
    let newCar = JSON.parse(JSON.stringify(this.model));
    this.add.emit(newCar);
    this.onClose();
  }

  editCarOwner() {
    let newCar = JSON.parse(JSON.stringify(this.model));
    this.edit.emit(newCar);
    this.editMode = false;
    this.onClose()
  }

}

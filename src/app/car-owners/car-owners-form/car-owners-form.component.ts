import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CarOwner } from '../shared/car-owner.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'car-owners-form',
  templateUrl: './car-owners-form.component.html',
  styleUrls: ['./car-owners-form.component.css']
})
export class CarOwnersFormComponent implements OnInit {

  editCarOwner: boolean = false;

  @Input() model: CarOwner
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Output() add: EventEmitter<CarOwner> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //Closing the form should reset the model to default CarOwner
  onClose() {
    this.close.emit(true)
  }

  onSubmit() {
    if(this.editCarOwner) {
      this.editedCarOwner()
    } else {
      this.addCarOwner();
    }
  }

  addCarOwner() {
    this.add.emit(this.model);
    //this.model = new CarOwner();
    this.onClose();
  }

  editedCarOwner() {
    //this.update.emit(this.model);
    this.model = new CarOwner();
    this.editCarOwner = false;
  }

}

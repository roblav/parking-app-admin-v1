import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CarOwner } from '../shared/car-owner.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'car-owners-form',
  templateUrl: './car-owners-form.component.html',
  styleUrls: ['./car-owners-form.component.css']
})
export class CarOwnersFormComponent implements OnInit {

  @Input() model: CarOwner
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit(true)
  }

}

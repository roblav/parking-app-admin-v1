import { Component, OnInit, Input } from '@angular/core';
import { CarOwner } from '../shared/car-owner.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'car-owners-form',
  templateUrl: './car-owners-form.component.html',
  styleUrls: ['./car-owners-form.component.css']
})
export class CarOwnersFormComponent implements OnInit {

  @Input() model: CarOwner

  constructor() { }

  ngOnInit() {
  }

}

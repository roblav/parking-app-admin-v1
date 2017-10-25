import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarOwnersFormComponent } from './car-owners-form.component';
import { FormsModule } from '@angular/forms';

import { CarOwner } from '../shared/car-owner.model';
import { Person } from '../shared/person.model';
import { Vehicle } from '../shared/vehicle.model'

describe('CarOwnersFormComponent', () => {
  let component: CarOwnersFormComponent;
  let fixture: ComponentFixture<CarOwnersFormComponent>;

  let person: Person = new Person();
  let vehicle: Vehicle = new Vehicle();
  let newCarOwner: CarOwner = new CarOwner({
        _id: 0,
        person: person,
        vehicles:[vehicle]
      });

  let model: CarOwner = newCarOwner;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ CarOwnersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnersFormComponent);
    component = fixture.componentInstance;
    component.model = model;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

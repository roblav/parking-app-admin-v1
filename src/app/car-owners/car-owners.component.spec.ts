import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CarOwnersComponent } from './car-owners.component';
import { CarOwnersFormComponent } from './car-owners-form/car-owners-form.component';
import { CarOwnersListComponent } from './car-owners-list/car-owners-list.component';

import { CarOwner } from './shared/car-owner.model';
import { Person } from './shared/person.model';
import { Vehicle } from './shared/vehicle.model'

describe('CarOwnersComponent', () => {
  let component: CarOwnersComponent;
  let fixture: ComponentFixture<CarOwnersComponent>;

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
      declarations: [ 
        CarOwnersComponent,
        CarOwnersFormComponent,
        CarOwnersListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnersComponent);
    component = fixture.componentInstance;
    component.model = model;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

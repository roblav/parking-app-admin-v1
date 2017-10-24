import {CarOwner} from './car-owner.model';
import {Person} from './person.model';
import {Vehicle} from './vehicle.model'

describe('CarOwner', () => {
  it('should create an instance', () => {
    expect(new CarOwner()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {

    let person1 = new Person({
      name: 'James',
      mobileNumber: '000',
      workNumber: '001',
      emailAddress: 'rob@gmail.com',
      building: 'some building',
      floor: 2,
      seat: '4G'
    });

    let vehicle1 = new Vehicle({
      type: 'car',
      make: 'ford',
      model: 'mondeo',
      colour: 'blue',
      reg: 'NH16 YHG'
    });

    let vehicle2: Vehicle = {
      type: 'Car',
      make: 'Ferrari',
      model: 'F60 America',
      colour: 'Blue',
      reg: 'HELL YEH'
    }

    let carOwner1: CarOwner =
      {
        _id: 12,
        person: person1,
        vehicles:[vehicle1, vehicle2]
      }

    expect(carOwner1.person.name).toEqual('James');
    expect(carOwner1.vehicles[1].make).toEqual('Ferrari');

  });
});

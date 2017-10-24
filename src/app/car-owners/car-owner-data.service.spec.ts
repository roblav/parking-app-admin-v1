import { TestBed, inject } from '@angular/core/testing';
import { CarOwner } from './shared/car-owner.model';
import { Person } from './shared/person.model';
import { Vehicle } from './shared/vehicle.model'

import { CarOwnerDataService } from './car-owner-data.service';

describe('CarOwnerDataService', () => {
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
      
  let vehicle2 = new Vehicle({
          type: 'Car',
          make: 'Ferrari',
          model: 'F60 America',
          colour: 'Blue',
          reg: 'HELL YEH'
  });
      
  let carOwner1 = new CarOwner ({
          person: person1,
          vehicles:[vehicle1, vehicle2]
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarOwnerDataService]
    });
  });
  beforeEach(() => {
    carOwner1
  });

  it('should be created', inject([CarOwnerDataService], (service: CarOwnerDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllCarOwners()', () => {
    it('should return an empty array by default', 
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        expect(service.getAllCarOwners()).toEqual([]);
      })
    );
    it('should give all new Car Owners a random string for _id', 
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        let carOwners = service.getAllCarOwners()
        expect(carOwners[0]._id).toBeTruthy();
      })
    );
    it('should return all Car Owners', 
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        expect(service.getAllCarOwners()).toEqual([carOwner1]);
      })
    );
  });

  describe('#getCarOwnerById(id)', () => {
    it('should return the correct Car Owner',
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        expect(service.getCarOwnerById(1)).toEqual(carOwner1);
      })
    )
  });

  // DELETE Simulate DELETE /carowner/:id
  describe('#deleteCarOwnerByID(id)', () => {
    it('should return empty CarOwners',
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        expect(service.getAllCarOwners()).toEqual([carOwner1]);
        service.deleteCarOwnerByID(1);
        expect(service.getAllCarOwners()).toEqual([]);
      })
    )
  });

  //CREATE Simulate POST /carowners
  describe('#updateCarOwnerById(id: number, values: Object = {})', () => {
    it('should return carOwner and updated CarOwners data',
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        expect(service.getAllCarOwners()).toEqual([carOwner1]);
        let newCarOwner = service.updateCarOwnerById(1, {person:{name:'Bob'}});
        expect(newCarOwner.person.name).toEqual('Bob');
      })
    );
    it('should return null if id returns no carOwner found',
      inject([CarOwnerDataService], (service: CarOwnerDataService) => {
        service.addCarOwner(carOwner1);
        expect(service.getAllCarOwners()).toEqual([carOwner1]);
        let newCarOwner = service.updateCarOwnerById(5, {person:{name:'Bob'}});
        expect(newCarOwner).toEqual(null);
      })
    );
  });

});

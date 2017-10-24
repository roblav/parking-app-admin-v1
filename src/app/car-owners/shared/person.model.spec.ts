import {Person} from './person.model';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let person = new Person({
      name: 'James',
      mobileNumber: '000',
      workNumber: '001',
      emailAddress: 'rob@gmail.com',
      building: 'some building',
      floor: 2,
      seat: '4G'
    });
    expect(person.name).toEqual('James');
    expect(person.mobileNumber).toEqual('000');
    expect(person.workNumber).toEqual('001');
    expect(person.emailAddress).toEqual('rob@gmail.com');
    expect(person.building).toEqual('some building');
    expect(person.floor).toEqual(2);
    expect(person.seat).toEqual('4G');
  });
});

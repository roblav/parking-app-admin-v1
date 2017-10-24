import {Vehicle} from './vehicle.model';

describe('Vehicle', () => {
  it('should create an instance', () => {
    expect(new Vehicle()).toBeTruthy();
  });
  it('should be able to take values', () => {
    let vehicle1 = new Vehicle({
      type: 'car',
      make: 'ford',
      model: 'mondeo',
      colour: 'blue',
      reg: 'NH16 YHG'
    });
    expect(vehicle1.type).toEqual('car');
    expect(vehicle1.make).toEqual('ford');
    expect(vehicle1.model).toEqual('mondeo');
    expect(vehicle1.colour).toEqual('blue');
    expect(vehicle1.reg).toEqual('NH16 YHG');
  })
});

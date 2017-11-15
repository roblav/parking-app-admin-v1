import { Person } from './person.model'
import { Vehicle } from './vehicle.model'

export class CarOwner {
  public id?: string;

  public person: Person;
  public vehicles: Vehicle[];

  public createdAt?: string;
  public updateAt?: string;
  public __v?: number;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
import { Person } from './person.model'
import { Vehicle } from './vehicle.model'

export class CarOwner {
  public id?: string;
  public name: string = "";
  public mobileNumber: string = "";
  public workNumber: string = "";
  public emailAddress: string = "";
  public building: string = "";
  public floor: number = 0;
  public seat: string = "";
  public vehicles: Vehicle[];

  public createdAt?: string;
  public updateAt?: string;
  public __v?: number;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
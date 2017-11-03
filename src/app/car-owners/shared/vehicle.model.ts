export class Vehicle {
  public regNo: string = "";
  public make: string = "";
  public model: string = "";
  public type: string = "";
  public colour: string = "";

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}
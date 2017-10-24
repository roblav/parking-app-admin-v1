export class Vehicle {
  public type: string = "";
  public make: string = "";
  public model: string = "";
  public colour: string = "";
  public reg: string = "";

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}
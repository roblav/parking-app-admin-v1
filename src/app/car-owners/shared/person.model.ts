export class Person {
  public name: string;
  public mobileNumber: string;
  public workNumber: string;
  public emailAddress: string;
  public building: string;
  public floor: number;
  public seat: string;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
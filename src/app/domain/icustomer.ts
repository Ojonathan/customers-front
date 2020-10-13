export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  //lastName?: string;  nos dice que puede tolerar que no haya lastname en el JSON
}

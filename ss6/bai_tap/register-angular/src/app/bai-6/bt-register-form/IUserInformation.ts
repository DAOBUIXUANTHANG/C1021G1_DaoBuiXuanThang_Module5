import {ICountry} from './ICountry';

export interface IUserInformation {
  email: string;
  password: string;
  confirmPassword: string;
  country: ICountry;
  age: number;
  gender :string;
  phone: string;
}

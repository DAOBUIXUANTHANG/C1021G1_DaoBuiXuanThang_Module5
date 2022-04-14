import {CustomerType} from './CustomerType';

export interface Customer{
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  emails?: string;
  address?: string;
  customerType?: CustomerType;

}

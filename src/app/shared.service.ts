import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }

  public item = [
    {
      propertyItem: 'SFS Homes',
      propertyType: 'Flat',
      place: 'Trivandrum',
      mobileNumber: '123456789'
    }
  ];

}

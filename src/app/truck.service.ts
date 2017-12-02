import { Injectable } from '@angular/core';
import { Truck } from './truck.model';
import { TRUCKS } from './mock-trucks';

@Injectable()
export class TruckService {

  constructor() { }

  getTrucks() {
    return TRUCKS;
  }

  getTruckById(truckId: number){
    for (var i = 0; i <= TRUCKS.length - 1; i++) {
      if (TRUCKS[i].id === truckId) {
        return TRUCKS[i];
      }
    }
  }

}

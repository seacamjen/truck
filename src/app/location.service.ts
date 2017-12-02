import { Injectable } from '@angular/core';
import { LocationMod } from './location.model';
import { LOCATIONS } from './mock-locations';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations() {
    return LOCATIONS;
  }

  getLocationById(locationId: number){
    for (var i = 0; i <= LOCATIONS.length - 1; i++) {
      if (LOCATIONS[i].id === locationId) {
        return LOCATIONS[i];
      }
    }
  }

}

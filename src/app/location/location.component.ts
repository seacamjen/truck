import { Component, OnInit } from '@angular/core';
import { LocationMod } from '../location.model';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { PreRegistry } from '../preRegistry.model';
import { PreRegistryService } from '../pre-registry.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService, PreRegistryService]
})
export class LocationComponent implements OnInit {
  locations: LocationMod[];

  goToDetailPage(clickedLocation: LocationMod) {
     this.router.navigate(['location', clickedLocation.id]);
   };

  constructor(private router: Router, private locationService: LocationService, private preRegistryService: PreRegistryService) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }

  submitForm(name: string, email: string, location: string) {
    var newPreRegistry: PreRegistry = new PreRegistry(name, email, location);
    this.preRegistryService.addPreRegistry(newPreRegistry);
  }

}

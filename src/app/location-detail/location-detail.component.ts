import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LocationMod } from '../location.model';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  providers: [LocationService]
})
export class LocationDetailComponent implements OnInit {
  locationId: number;
  locationToDisplay: LocationMod;

  constructor(private route: ActivatedRoute, private location: Location, private locationService: LocationService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.locationId = parseInt(urlParameters['id']);
    });
    this.locationToDisplay = this.locationService.getLocationById(this.locationId);
  }

}

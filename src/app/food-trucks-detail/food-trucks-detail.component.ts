import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Truck } from '../truck.model';
import { TruckService} from '../truck.service';

@Component({
  selector: 'app-food-trucks-detail',
  templateUrl: './food-trucks-detail.component.html',
  styleUrls: ['./food-trucks-detail.component.css'],
  providers: [TruckService]
})
export class FoodTrucksDetailComponent implements OnInit {
  truckId: number;
  truckToDisplay: Truck;

  constructor(private route: ActivatedRoute, private location: Location, private truckService: TruckService) { }

  trucks: Truck[];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.truckId = parseInt(urlParameters['id']);
    });
    this.truckToDisplay = this.truckService.getTruckById(this.truckId);
  }

}

import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck.model';
import { Router } from '@angular/router';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-food-trucks',
  templateUrl: './food-trucks.component.html',
  styleUrls: ['./food-trucks.component.css'],
  providers: [TruckService]
})
export class FoodTrucksComponent implements OnInit {
  trucks: Truck[];

  constructor(private router: Router, private truckService: TruckService) { }

  goToDetailPage(clickedTruck: Truck) {
     this.router.navigate(['food-trucks', clickedTruck.id]);
   };

  ngOnInit() {
    this.trucks = this.truckService.getTrucks();
  }

}

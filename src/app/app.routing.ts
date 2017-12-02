import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FoodTrucksComponent } from './food-trucks/food-trucks.component';
import { LocationComponent } from './location/location.component';
import { VendorComponent } from './vendor/vendor.component';
import { AboutComponent } from './about/about.component';
import { FoodTrucksDetailComponent } from './food-trucks-detail/food-trucks-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'food-trucks',
    component: FoodTrucksComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'vendor',
    component: VendorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'food-trucks/:id',
    component: FoodTrucksDetailComponent
  },
  {
    path: 'location/:id',
    component: LocationDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

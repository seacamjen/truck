import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PanelModule, ButtonModule, ScheduleModule } from 'primeng/primeng';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FoodTrucksComponent } from './food-trucks/food-trucks.component';
import { LocationComponent } from './location/location.component';
import { VendorComponent } from './vendor/vendor.component';
import { AboutComponent } from './about/about.component';
import { FoodTrucksDetailComponent } from './food-trucks-detail/food-trucks-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TicketsComponent,
    FoodTrucksComponent,
    LocationComponent,
    VendorComponent,
    AboutComponent,
    FoodTrucksDetailComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    ScheduleModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

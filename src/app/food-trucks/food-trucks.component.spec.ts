import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTrucksComponent } from './food-trucks.component';

describe('FoodTrucksComponent', () => {
  let component: FoodTrucksComponent;
  let fixture: ComponentFixture<FoodTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

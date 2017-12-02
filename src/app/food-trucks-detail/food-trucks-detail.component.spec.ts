import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTrucksDetailComponent } from './food-trucks-detail.component';

describe('FoodTrucksDetailComponent', () => {
  let component: FoodTrucksDetailComponent;
  let fixture: ComponentFixture<FoodTrucksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTrucksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTrucksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

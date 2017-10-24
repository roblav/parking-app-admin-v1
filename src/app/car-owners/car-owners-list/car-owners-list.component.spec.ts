import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnersListComponent } from './car-owners-list.component';

describe('CarOwnersListComponent', () => {
  let component: CarOwnersListComponent;
  let fixture: ComponentFixture<CarOwnersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

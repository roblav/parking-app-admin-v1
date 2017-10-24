import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnersFormComponent } from './car-owners-form.component';

describe('CarOwnersFormComponent', () => {
  let component: CarOwnersFormComponent;
  let fixture: ComponentFixture<CarOwnersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

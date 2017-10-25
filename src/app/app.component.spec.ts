import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CarOwnersComponent } from './car-owners/car-owners.component';
import { CarOwnersFormComponent } from './car-owners/car-owners-form/car-owners-form.component';
import { CarOwnersListComponent } from './car-owners/car-owners-list/car-owners-list.component';

import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        CarOwnersComponent,
        CarOwnersFormComponent,
        CarOwnersListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ParkingAppAdmin');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Parking App: ADMIN');
  }));
});

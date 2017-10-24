import { ParkingAppAdminPage } from './app.po';

describe('parking-app-admin App', () => {
  let page: ParkingAppAdminPage;

  beforeEach(() => {
    page = new ParkingAppAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

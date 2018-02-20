import { JonathansOnlineProfilePage } from './app.po';

describe('jonathans-online-profile App', () => {
  let page: JonathansOnlineProfilePage;

  beforeEach(() => {
    page = new JonathansOnlineProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

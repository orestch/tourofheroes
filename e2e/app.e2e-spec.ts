import { TourofheroesPage } from './app.po';

describe('tourofheroes App', () => {
  let page: TourofheroesPage;

  beforeEach(() => {
    page = new TourofheroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

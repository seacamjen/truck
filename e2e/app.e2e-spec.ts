import { FoodtruckPage } from './app.po';

describe('foodtruck App', () => {
  let page: FoodtruckPage;

  beforeEach(() => {
    page = new FoodtruckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

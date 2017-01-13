import { AngPruductsPage } from './app.po';

describe('ang-pruducts App', function() {
  let page: AngPruductsPage;

  beforeEach(() => {
    page = new AngPruductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

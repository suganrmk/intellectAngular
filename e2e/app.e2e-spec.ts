import { AngularDataTablePage } from './app.po';

describe('angular-data-table App', () => {
  let page: AngularDataTablePage;

  beforeEach(() => {
    page = new AngularDataTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

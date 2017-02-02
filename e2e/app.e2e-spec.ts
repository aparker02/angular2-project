import { AngGlPage } from './app.po';

describe('ang-gl App', function() {
  let page: AngGlPage;

  beforeEach(() => {
    page = new AngGlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

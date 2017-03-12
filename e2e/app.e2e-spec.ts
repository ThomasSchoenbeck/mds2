import { Mds2Page } from './app.po';

describe('mds2 App', () => {
  let page: Mds2Page;

  beforeEach(() => {
    page = new Mds2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

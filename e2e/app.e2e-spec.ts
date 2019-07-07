import { DataBindingDeepDivePage } from './app.po';

describe('data-binding-deep-dive App', function() {
  let page: DataBindingDeepDivePage;

  beforeEach(() => {
    page = new DataBindingDeepDivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

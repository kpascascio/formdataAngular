import { NgImagePage } from './app.po';

describe('ng-image App', () => {
  let page: NgImagePage;

  beforeEach(() => {
    page = new NgImagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

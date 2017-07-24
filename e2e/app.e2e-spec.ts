import { GaPage } from './app.po';

describe('ga App', () => {
  let page: GaPage;

  beforeEach(() => {
    page = new GaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

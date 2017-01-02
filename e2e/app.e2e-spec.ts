import { NgrxGilSimonPage } from './app.po';

describe('ngrx-gil-simon App', function() {
  let page: NgrxGilSimonPage;

  beforeEach(() => {
    page = new NgrxGilSimonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

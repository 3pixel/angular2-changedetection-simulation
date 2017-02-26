import { Angular2ChangedetectionSimulationPage } from './app.po';

describe('angular2-changedetection-simulation App', () => {
  let page: Angular2ChangedetectionSimulationPage;

  beforeEach(() => {
    page = new Angular2ChangedetectionSimulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

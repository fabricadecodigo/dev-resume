import { DevResumePage } from './app.po';

describe('dev-resume App', () => {
  let page: DevResumePage;

  beforeEach(() => {
    page = new DevResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DfserviceExamplePage } from './app.po';

describe('dfservice-example App', function() {
  let page: DfserviceExamplePage;

  beforeEach(() => {
    page = new DfserviceExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

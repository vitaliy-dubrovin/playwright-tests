import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly dynamicIdLink: Locator;
  readonly classAttributeLink: Locator;
  readonly hiddenLayersLink: Locator;
  readonly loadDelayLink: Locator;
  readonly ajaxDataLink: Locator;
  readonly clientSideDelayLink: Locator;
  readonly clickLink: Locator;
  readonly textInputLink: Locator;
  readonly scrollBarsLink: Locator;
  readonly dynamicTableLink: Locator;
  readonly verifyTextLink: Locator;
  readonly progressBarLink: Locator;
  readonly visibilityLink: Locator; 
  readonly sampleAppLink: Locator;
  readonly mouseOverLink: Locator; 
  readonly nonBreakingSpaceLink: Locator;
  readonly overlappedElementLink: Locator;
  readonly shadowDomLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'UI Test Automation Playground' });
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' });
    this.classAttributeLink = page.getByRole('link', { name: 'Class Attribute' });
    this.hiddenLayersLink = page.getByRole('link', { name: 'Hidden Layers' });
    this.loadDelayLink = page.getByRole('link', { name: 'Load Delay' });
    this.ajaxDataLink = page.getByRole('link', { name: 'AJAX Data' });
    this.clientSideDelayLink = page.getByRole('link', { name: 'Client Side Delay' });
    this.clickLink = page.getByRole('link', { name: 'Click' });
    this.textInputLink = page.getByRole('link', { name: 'Text Input' });
    this.scrollBarsLink = page.getByRole('link', { name: 'Scrollbars' });
    this.dynamicTableLink = page.getByRole('link', { name: 'Dynamic Table' }); 
    this.verifyTextLink = page.getByRole('link', { name: 'Verify Text' });
    this.progressBarLink = page.getByRole('link', { name: 'Progress Bar' });
    this.visibilityLink = page.getByRole('link', { name: 'Visibility' });
    this.sampleAppLink = page.getByRole('link', { name: 'Sample App' });
    this.mouseOverLink = page.getByRole('link', { name: 'Mouse Over' });
    this.nonBreakingSpaceLink = page.getByRole('link', { name: 'Non-Breaking Space' });
    this.overlappedElementLink = page.getByRole('link', { name: 'Overlapped Element' });
    this.shadowDomLink = page.getByRole('link', { name: 'Shadow DOM' });
  }
}
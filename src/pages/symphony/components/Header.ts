import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for header
 */
export class Header extends BaseComponent {
  private readonly aboutUsDropdown: Locator;
  private readonly careersButton: Locator;
  private readonly aboutCompanyButton: Locator;


  /**
   * Constructor of the class.
   * @param page
   */
  constructor(page: Page) {
    super(page);
    this.aboutUsDropdown = page.locator('a').filter({ hasText: 'About Us' }).first()
    this.aboutCompanyButton = page.locator('[href="/about-us/company"]');
    this.careersButton = page.locator('a[class="header--nav-link "][href="/careers"]');
  }

  /**
   * Selects company on about us.
   */
  async selectsCompany(): Promise<void> {
    this.logger.info('hover on the about us button');
    await this.aboutUsDropdown.waitFor({ state: 'attached' });
    await this.aboutUsDropdown.hover();
    this.logger.info('Clicks on company button ');
    await this.aboutCompanyButton.waitFor({ state: 'attached' });
    await this.aboutCompanyButton.click();
  }

  /**
   * Clicks the careers button.
   */
  async clickCareersButton(): Promise<void> {
    this.logger.info('Clicking the careers button');
    await this.careersButton.waitFor({ state: 'attached' });
    await this.careersButton.click();
  }

}
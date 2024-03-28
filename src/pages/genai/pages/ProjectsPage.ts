import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";


/**
 * Class for project page.
 */
export class ProjectPage extends basePage {
  private readonly projectTitle: Locator;

  /**
   * Constructor of the project page
   */
  constructor(page: Page) {
    super(page);
    this.projectTitle = page.locator('div > h1');
  }

  /**
   * Checks if the title is visible.
   * @return {Promise<boolean>}
   */
  async isTitleVisible(): Promise<boolean> {
    try {
      this.logger.info('Checking if the title is visible');
      await this.projectTitle.waitFor({ state: 'attached' });
      return await this.projectTitle.isVisible();
    } catch (error) {
      this.logger.error(`Error checking if title is visible: ${error}`);
      return false;
    }
  }
}
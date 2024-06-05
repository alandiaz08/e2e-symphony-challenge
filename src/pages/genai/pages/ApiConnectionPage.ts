import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ApiConnectionPage
 */
export class ApiConnectionPage extends BaseComponent {
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly saveButton: Locator;
  private readonly actionButton: Locator;
  private readonly deleteButton: Locator;
  private readonly deleteApiPopupContainer: Locator;


  constructor(page: Page) {
    super(page);
    this.title = this.page.locator('[class="self-stretc"]');
    this.description = this.page.locator('[data-testid="page-description"]');
    this.saveButton = this.page.locator('[data-testid="page-actions"] button').nth(0);
    this.actionButton = this.page.locator('button +div  [data-testid="dropdown-button"]');
    this.deleteButton = this.page.locator('ul li');
    this.deleteApiPopupContainer = this.page.locator('[role="dialog"]');

  }

  /**
   * Retrieves the title text.
   * @returns {Promise<string | null>}
   */
  async getTitleText(): Promise<string | null> {
    this.logger.info('Getting the title text');
    await this.title.waitFor({ state: 'attached' });
    return await this.title.textContent();
  }

  /**
   * Checks if the title is visible.
   * @return {Promise<boolean>}
   */
  async isTitleVisible(): Promise<boolean> {
    try {
      this.logger.info('Checking if the title is visible');
      await this.title.waitFor({ state: 'attached' });
      return await this.title.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for title visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the description text.
   * @returns {Promise<string | null>}
   */
  async getDescriptionText(): Promise<string | null> {
    this.logger.info('Getting the description text');
    await this.description.waitFor({ state: 'attached' });
    return await this.description.textContent();
  }

  /**
   * Checks if the description is visible.
   * @return {Promise<boolean>}
   */
  async isDescriptionVisible(): Promise<boolean> {
    try {
      this.logger.info('Checking if the description is visible');
      await this.description.waitFor({ state: 'attached' });
      return await this.description.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for description visibility', error);
      return false;
    }
  }

  /**
   * Clicks the Action button and then the Delete button.
   */
  async clickActionAndDelete(): Promise<void> {
    this.logger.info('Attempting to click on the Action button and then on the Delete button');
    await this.actionButton.waitFor({ state: 'attached' });
    await this.actionButton.click();
    await this.page.waitForTimeout(4000);
    this.logger.info('Action button clicked, now waiting for Delete button');
    await this.deleteButton.waitFor({ state: 'attached' });
    await this.deleteButton.click();
    this.logger.info('Delete button clicked successfully');
  }


  /**
   * Clicks the save button.
   */
  async clickSaveButton(): Promise<void> {
    this.logger.info('Clicking the save button');
    await this.saveButton.waitFor({ state: 'attached' });
    await this.saveButton.click();
  }

  /**
   * Checks if the save button is visible.
   * @return {Promise<boolean>}
   */
  async isSaveButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the save button is visible');
    try {
      await this.saveButton.waitFor({ state: 'attached' });
      return await this.saveButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking save button visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the delete Api popup container.
   * @returns {Promise<Locator>}
   */
  async getDeleteApiPopupContainerContainer(): Promise<Locator> {
    this.logger.info('Retrieving the delete Api popup container');
    await this.deleteApiPopupContainer.waitFor({ state: 'attached' });
    return this.deleteApiPopupContainer;
  }
}
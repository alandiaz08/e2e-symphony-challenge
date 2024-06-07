import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for SelectTypeOfIntegrationModal
 */
export class SelectTypeOfIntegrationModal extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly apiButton: Locator;
  private readonly dataBaseButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('h2 div');
    this.description = this.container.locator('p');
    this.apiButton = this.container.locator('[src="/assets/integrations/api-short.png"]');
    this.dataBaseButton = this.container.locator('[src="/assets/integrations/db-short.png"]');
  }

  /**
 * Checks if the title is visible.
 * @return {Promise<boolean>}
 */
  async isTitleVisible(): Promise<boolean> {
    this.logger.info('Checking if the title is visible');
    try {
      await this.title.waitFor({ state: 'attached' });
      return await this.title.isVisible();
    } catch (error) {
      this.logger.error('Error when checking title visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the title.
   * @return {Promise<string | null>}
   */
  async getTitleText(): Promise<string | null> {
    this.logger.info('Getting the title text');
    await this.title.waitFor({ state: 'attached' });
    return await this.title.textContent();
  }

  /**
   * Checks if the description is visible.
   * @return {Promise<boolean>}
   */
  async isDescriptionVisible(): Promise<boolean> {
    this.logger.info('Checking if the description is visible');
    try {
      await this.description.waitFor({ state: 'attached' });
      return await this.description.isVisible();
    } catch (error) {
      this.logger.error('Error when checking description visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the description.
   * @return {Promise<string | null>}
   */
  async getDescriptionText(): Promise<string | null> {
    this.logger.info('Getting the description text');
    await this.description.waitFor({ state: 'attached' });
    return await this.description.textContent();
  }

  /**
   * Checks if the API button is visible.
   * @return {Promise<boolean>}
   */
  async isApiButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the API button is visible');
    try {
      await this.apiButton.waitFor({ state: 'attached' });
      return await this.apiButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking API button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the API button.
   */
  async clickApiButton(): Promise<void> {
    this.logger.info('Clicking the API button');
    await this.apiButton.waitFor({ state: 'attached' });
    await this.apiButton.click();
  }

  /**
   * Checks if the Database button is visible.
   * @return {Promise<boolean>}
   */
  async isDataBaseButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Database button is visible');
    try {
      await this.dataBaseButton.waitFor({ state: 'attached' });
      return await this.dataBaseButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking Database button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the Database button.
   */
  async clickDataBaseButton(): Promise<void> {
    this.logger.info('Clicking the Database button');
    await this.dataBaseButton.waitFor({ state: 'attached' });
    await this.dataBaseButton.click();
  }

}
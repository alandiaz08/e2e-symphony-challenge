import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsConfigResultItem
 */
export class ProjectsConfigResultItem extends BaseComponent {
  private container;
  private readonly configTitle: Locator;
  private readonly configDescription: Locator;
  private readonly configPicture: Locator;
  private readonly configValue: Locator;
  private readonly editButton: Locator


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.configTitle = this.container.locator('h3');
    this.configDescription = this.container.locator('small');
    this.configPicture = this.container.locator('div > img');
    this.configValue = this.container.locator('div + p');
    this.editButton = this.container.locator('[data-testid="edit-modal-button"]');
  }

  /**
   * Retrieves the configuration title text.
   * @return {Promise<string | null>}
   */
  async getConfigTitleText(): Promise<string | null> {
    this.logger.info('Retrieving the configuration title text');
    await this.configTitle.waitFor({ state: 'attached' });
    return this.configTitle.textContent();
  }

  /**
  * Checks if the configuration title is visible.
  * @return {Promise<boolean>}
  */
  async hasConfigTitle(): Promise<boolean> {
    try {
      this.logger.info('Checking if the configuration title is visible');
      await this.configTitle.waitFor({ state: 'attached' });
      return await this.configTitle.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the configuration title', error);
      return false;
    }
  }

  /**
  * Retrieves the configuration description text.
  * @return {Promise<string | null>}
  */
  async getConfigDescriptionText(): Promise<string | null> {
    this.logger.info('Retrieving the configuration description text');
    await this.configDescription.waitFor({ state: 'attached' });
    return this.configDescription.textContent();
  }

  /**
  * Checks if the configuration description is visible.
  * @return {Promise<boolean>}
  */
  async hasConfigDescription(): Promise<boolean> {
    try {
      this.logger.info('Checking if the configuration description is visible');
      await this.configDescription.waitFor({ state: 'attached' });
      return await this.configDescription.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the configuration description', error);
      return false;
    }
  }

  /**
  * Checks if the configuration picture is visible.
  * @return {Promise<boolean>}
  */
  async hasConfigPicture(): Promise<boolean> {
    try {
      this.logger.info('Checking if the configuration picture is visible');
      await this.configPicture.waitFor({ state: 'attached' });
      return await this.configPicture.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the configuration picture', error);
      return false;
    }
  }

  /**
  * Retrieves the configuration value text.
  * @return {Promise<string | null>}
  */
  async getConfigValueText(): Promise<string | null> {
    this.logger.info('Retrieving the configuration value text');
    await this.configValue.waitFor({ state: 'attached' });
    return this.configValue.textContent();
  }

  /**
  * Checks if the configuration value is visible.
  * @return {Promise<boolean>}
  */
  async hasConfigValue(): Promise<boolean> {
    try {
      this.logger.info('Checking if the configuration value is visible');
      await this.configValue.waitFor({ state: 'attached' });
      return await this.configValue.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the configuration value', error);
      return false;
    }
  }

  /**
  * Clicks the edit button.
  */
  async clickEditButton(): Promise<void> {
    this.logger.info('Clicking the edit button');
    await this.editButton.waitFor({ state: 'attached' });
    await this.editButton.click();
  }

}
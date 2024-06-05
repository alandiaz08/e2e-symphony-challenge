import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for CustomApiConnectModal
 */
export class CustomApiConnectModal extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly nameField: Locator;
  private readonly descriptionField: Locator;
  private readonly requestDropdown: Locator;
  private readonly endpointField: Locator;
  private readonly cancelButton: Locator;
  private readonly saveButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('h2 div').nth(0);
    this.description = this.container.locator('h2 div + div');
    this.nameField = this.container.locator('[id="api_name"]');
    this.descriptionField = this.container.locator('[id="api_description"]');
    this.requestDropdown = this.container.locator('[id="api_request_type"]');
    this.endpointField = this.container.locator('[id="api_endpoint"]');
    this.cancelButton = this.container.locator('');
    this.saveButton = this.container.locator('[type="submit"]');
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
   * Enters text into the name field.
   * @param {string} name
   */
  async enterName(name: string): Promise<void> {
    this.logger.info('Entering name');
    await this.nameField.waitFor({ state: 'attached' });
    await this.nameField.fill(name);
  }

  /**
   * Enters text into the description field.
   * @param {string} description
   */
  async enterDescription(description: string): Promise<void> {
    this.logger.info('Entering description');
    await this.descriptionField.waitFor({ state: 'attached' });
    await this.descriptionField.fill(description);
  }

  /**
   * Selects a request from the dropdown.
   * @param {string} request
   */
  async selectRequest(request: string): Promise<void> {
    this.logger.info(`Selecting request: ${request}`);
    await this.requestDropdown.waitFor({ state: 'attached' });
    await this.requestDropdown.click();
    const option = this.locator(`[data-value="${request}"]`);
    await option.click();
  }

  /**
   * Enters text into the endpoint field.
   * @param {string} endpoint
   */
  async enterEndpoint(endpoint: string): Promise<void> {
    this.logger.info('Entering endpoint');
    await this.endpointField.waitFor({ state: 'attached' });
    await this.endpointField.fill(endpoint);
  }

  /**
   * Clicks the cancel button.
   */
  async clickCancelButton(): Promise<void> {
    this.logger.info('Clicking the cancel button');
    await this.cancelButton.waitFor({ state: 'attached' });
    await this.cancelButton.click();
  }

  /**
   * Checks if the cancel button is visible.
   * @return {Promise<boolean>}
   */
  async isCancelButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the cancel button is visible');
    try {
      await this.cancelButton.waitFor({ state: 'attached' });
      return await this.cancelButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking cancel button visibility', error);
      return false;
    }
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
}
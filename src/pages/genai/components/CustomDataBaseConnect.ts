import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for CustomApiConnectModal
 */
export class CustomApiConnectModal extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly dataBaseTypeDropdown: Locator;
  private readonly hostAddressField: Locator;
  private readonly portField: Locator;
  private readonly dataBaseNameField: Locator;
  private readonly userNameField: Locator;
  private readonly passwordField: Locator;
  private readonly cancelButton: Locator;
  private readonly saveButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('h2 div').nth(0);
    this.description = this.container.locator('h2 div + div');
    this.dataBaseTypeDropdown = this.container.locator('[id="db_type"]');
    this.hostAddressField = this.container.locator('[id="db_host"]');
    this.portField = this.container.locator('[id="db_port"]');
    this.dataBaseNameField = this.container.locator('[id="db_name"]');
    this.userNameField = this.container.locator('[id="db_username"]');
    this.passwordField = this.container.locator('[id="db_password"]');
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
   * Enters the host address into the host address field.
   * @param {string} hostAddress - The host address to enter.
   */
  async enterHostAddress(hostAddress: string): Promise<void> {
    this.logger.info('Entering host address');
    await this.hostAddressField.waitFor({ state: 'attached' });
    await this.hostAddressField.fill(hostAddress);
  }

  /**
   * Enters the port number into the port field.
   * @param {string} port - The port number to enter.
   */
  async enterPort(port: string): Promise<void> {
    this.logger.info('Entering port number');
    await this.portField.waitFor({ state: 'attached' });
    await this.portField.fill(port);
  }

  /**
   * Enters the database name into the database name field.
   * @param {string} databaseName - The database name to enter.
   */
  async enterDataBaseName(databaseName: string): Promise<void> {
    this.logger.info('Entering database name');
    await this.dataBaseNameField.waitFor({ state: 'attached' });
    await this.dataBaseNameField.fill(databaseName);
  }

  /**
   * Enters the username into the username field.
   * @param {string} userName - The username to enter.
   */
  async enterUserName(userName: string): Promise<void> {
    this.logger.info('Entering username');
    await this.userNameField.waitFor({ state: 'attached' });
    await this.userNameField.fill(userName);
  }

  /**
   * Enters the password into the password field.
   * @param {string} password - The password to enter.
   */
  async enterPassword(password: string): Promise<void> {
    this.logger.info('Entering password');
    await this.passwordField.waitFor({ state: 'attached' });
    await this.passwordField.fill(password);
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

  /**
   * Selects a request from the dropdown.
   * @param {string} request
   */
  async selectDataBaseTypeDropdown(type: string): Promise<void> {
    this.logger.info('Selecting data base type:' + type);
    await this.dataBaseTypeDropdown.waitFor({ state: 'attached' });
    await this.dataBaseTypeDropdown.click();
    const option = this.page.locator('[data-value="' + type + '"]');
    await option.click();
  }
}
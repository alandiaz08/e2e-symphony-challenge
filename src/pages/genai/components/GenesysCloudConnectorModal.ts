import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for GenesysCloudConnectorModal
 */
export class GenesysCloudConnectorModal extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly organizationField: Locator;
  private readonly clientIdField: Locator;
  private readonly deploymentIdField: Locator;
  private readonly clientSecretField: Locator;
  private readonly queueNameField: Locator;
  private readonly transferRuleField: Locator;
  private readonly cancelButton: Locator;
  private readonly saveButton: Locator;

  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('h2 div:nth-child(1)');
    this.organizationField = this.container.locator('[id="organization_id"]');
    this.clientIdField = this.container.locator('[id="client_id"]');
    this.deploymentIdField = this.container.locator('[id="deployment_id"]');
    this.clientSecretField = this.container.locator('[id="client_secret"]');
    this.queueNameField = this.container.locator('[id="queue_name"]');
    this.transferRuleField = this.container.locator('[id="transfer_rule"]');
    this.cancelButton = this.container.locator('');
    this.saveButton = this.container.locator('[type="submit"]');
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
   * Enters text into the organization field.
   * @param {string} text The text to be entered.
   */
  async enterOrganizationField(text: string): Promise<void> {
    this.logger.info('Entering text into the organization field');
    await this.organizationField.waitFor({ state: 'attached' });
    await this.organizationField.fill(text);
  }

  /**
   * Enters text into the client ID field.
   * @param {string} text The text to be entered.
   */
  async enterClientIdField(text: string): Promise<void> {
    this.logger.info('Entering text into the client ID field');
    await this.clientIdField.waitFor({ state: 'attached' });
    await this.clientIdField.fill(text);
  }

  /**
   * Enters text into the deployment ID field.
   * @param {string} text The text to be entered.
   */
  async enterDeploymentIdField(text: string): Promise<void> {
    this.logger.info('Entering text into the deployment ID field');
    await this.deploymentIdField.waitFor({ state: 'attached' });
    await this.deploymentIdField.fill(text);
  }

  /**
   * Enters text into the client secret field.
   * @param {string} text The text to be entered.
   */
  async enterClientSecretField(text: string): Promise<void> {
    this.logger.info('Entering text into the client secret field');
    await this.clientSecretField.waitFor({ state: 'attached' });
    await this.clientSecretField.fill(text);
  }

  /**
   * Enters text into the queue name field.
   * @param {string} text The text to be entered.
   */
  async enterQueueNameField(text: string): Promise<void> {
    this.logger.info('Entering text into the queue name field');
    await this.queueNameField.waitFor({ state: 'attached' });
    await this.queueNameField.fill(text);
  }

  /**
   * Enters text into the transfer rule field.
   * @param {string} text The text to be entered.
   */
  async enterTransferRuleField(text: string): Promise<void> {
    this.logger.info('Entering text into the transfer rule field');
    await this.transferRuleField.waitFor({ state: 'attached' });
    await this.transferRuleField.fill(text);
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
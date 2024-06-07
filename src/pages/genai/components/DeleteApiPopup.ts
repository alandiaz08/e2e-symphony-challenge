import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for DeleteApiPopup
 */
export class DeleteApiPopup extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly cancelButton: Locator;
  private readonly deleteButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('h2');
    this.description = this.container.getByText('Estás a punto de eliminar la')
    this.cancelButton = this.container.locator('div button').nth(0);
    this.deleteButton = this.container.locator('div button + button');
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
   * Clicks the disconnect button.
   */
  async clickDeleteButton(): Promise<void> {
    this.logger.info('Clicking the disconnect button');
    await this.deleteButton.waitFor({ state: 'attached' });
    await this.deleteButton.click();
  }

  /**
   * Checks if the disconnect button is visible.
   * @return {Promise<boolean>}
   */
  async isDisconnectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the disconnect button is visible');
    try {
      await this.deleteButton.waitFor({ state: 'attached' });
      return await this.deleteButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking disconnect button visibility', error);
      return false;
    }
  }

}
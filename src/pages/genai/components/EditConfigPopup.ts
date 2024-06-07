import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for EditConfigPopup
 */
export class EditConfigPopup extends BaseComponent {
  private container;
  private readonly title: Locator;
  private readonly question: Locator;
  private readonly editField: Locator;
  private readonly cancelButton: Locator;
  private readonly saveButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.title = this.container.locator('[class="font-bold"]');
    this.question = this.container.locator('[class="font-bold"] + div');
    this.editField = this.container.locator('div > textarea:nth-child(1)');
    this.cancelButton = this.container.locator('[data-testid="edit-modal-cancel-button"]');
    this.saveButton = this.container.locator('[data-testid="edit-modal-save-button"]');
  }

  /**
   * Retrieves the title text.
   * @return {Promise<string | null>}
   */
  async getTitleText(): Promise<string | null> {
    this.logger.info('Retrieving the title text');
    await this.title.waitFor({ state: 'attached' });
    return this.title.textContent();
  }

  /**
  * Checks if the title is visible.
  * @return {Promise<boolean>}
  */
  async hasTitle(): Promise<boolean> {
    try {
      this.logger.info('Checking if the title is visible');
      await this.title.waitFor({ state: 'attached' });
      return await this.title.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the title', error);
      return false;
    }
  }

  /**
  * Retrieves the question text.
  * @return {Promise<string | null>}
  */
  async getQuestionText(): Promise<string | null> {
    this.logger.info('Retrieving the question text');
    await this.question.waitFor({ state: 'attached' });
    return this.question.textContent();
  }

  /**
  * Checks if the question is visible.
  * @return {Promise<boolean>}
  */
  async hasQuestion(): Promise<boolean> {
    try {
      this.logger.info('Checking if the question is visible');
      await this.question.waitFor({ state: 'attached' });
      return await this.question.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of the question', error);
      return false;
    }
  }

  /**
  * Enters text into the edit field.
  * @param {string} text The text to be entered.
  */
  async enterEditText(text: string): Promise<void> {
    this.logger.info('Entering text into the edit field');
    await this.editField.waitFor({ state: 'attached' });
    await this.editField.clear();
    await this.editField.type(text);
  }

  /**
  * Clicks the cancel button.
  */
  async clickCancelButton(): Promise<void> {
    this.logger.info('Clicking the cancel button');
    await this.cancelButton.waitFor({ state: 'attached' });
    await this.cancelButton.clear();
    await this.cancelButton.click();
  }

  /**
  * Clicks the save button.
  */
  async clickSaveButton(): Promise<void> {
    this.logger.info('Clicking the save button');
    await this.saveButton.waitFor({ state: 'attached' });
    await this.saveButton.click();
  }

}
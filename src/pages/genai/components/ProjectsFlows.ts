import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAiChat
 */
export class ProjectsAiChat extends BaseComponent {
  private container;
  private readonly startButton: Locator;
  private readonly promptDropdownButton: Locator;
  private readonly promptValue: Locator;
  private readonly promptField: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.startButton = this.container.locator('[data-testid="rf__node-1"]');
    this.promptDropdownButton = this.container.locator('[data-testid="dropdown-button"]');
    this.promptValue = this.container.locator('');
    this.promptField = this.container.locator('textarea');
  }

  /**
   * Retrieves the start button.
   * @return {Promise<Locator>}
   */
  async getStartButton(): Promise<Locator> {
    this.logger.info('Retrieving the start button');
    await this.startButton.waitFor({ state: 'attached' });
    return this.startButton;
  }

  /**
  * Checks if the start button is visible.
  * @return {Promise<boolean>} True if the start button is visible, false otherwise.
  */
  async hasStartButton(): Promise<boolean> {
    this.logger.info('Checking if the start button is visible');
    try {
      await this.startButton.waitFor({ state: 'attached' });
      return await this.startButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for start button visibility', error);
      return false;
    }
  }

  /**
  * Clicks the start button.
  * @return {Promise<void>}
  */
  async clickStartButton(): Promise<void> {
    this.logger.info('Clicking the start button');
    await this.startButton.waitFor({ state: 'attached' });
    await this.startButton.click();
  }

  /**
  * Retrieves the text content of the prompt field.
  * @return {Promise<string | null>}
  */
  async getPromptFieldText(): Promise<string | null> {
    this.logger.info('Getting the text of the prompt field');
    await this.promptField.waitFor({ state: 'attached' });
    return await this.promptField.textContent();
  }

  /**
  * Enters text into the prompt field.
  * @param {string} text The text to enter into the prompt field.
  * @return {Promise<void>}
  */
  async enterPromptField(text: string): Promise<void> {
    this.logger.info('Entering text into the prompt field');
    await this.promptField.waitFor({ state: 'attached' });
    await this.promptField.fill(text);
  }

  /**
   * Selects a prompt from the dropdown.
   * @param {string} request
   */
  async selectPrompt(prompt: string): Promise<void> {
    this.logger.info('Selecting request: ' + prompt);
    await this.promptDropdownButton.waitFor({ state: 'attached' });
    await this.promptDropdownButton.click();
    const option = this.page.locator('[data-testid="' + prompt + '"]');
    await option.click();
  }
}
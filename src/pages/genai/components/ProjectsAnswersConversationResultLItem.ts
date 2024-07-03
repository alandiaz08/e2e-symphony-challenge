import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAnswersConversationResultLItem
 */
export class ProjectsAnswersConversationResultLItem extends BaseComponent {
  private container;
  private readonly conversationId: Locator;
  private readonly interactionNumber: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.conversationId = this.container.locator('div:nth-child(1)');
    this.interactionNumber = this.container.locator('div:nth-child(2)');
  }

  /**
   * Checks if the conversation ID is visible.
   * @return {Promise<boolean>} True if the conversation ID is visible, false otherwise.
   */
  async hasConversationId(): Promise<boolean> {
    try {
      this.logger.info('Checking if the conversation ID is visible');
      await this.conversationId.waitFor({ state: 'attached' });
      return await this.conversationId.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for conversation ID visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the conversation ID.
   * @return {Promise<string | null>} The text content of the conversation ID.
   */
  async getConversationIdText(): Promise<string | null> {
    this.logger.info('Getting the text of the conversation ID');
    await this.conversationId.waitFor({ state: 'attached' });
    return await this.conversationId.textContent();
  }

  /**
   * Clicks the conversation ID.
   */
  async clickConversationId(): Promise<void> {
    this.logger.info('Clicking the conversation ID');
    await this.conversationId.waitFor({ state: 'attached' });
    await this.conversationId.click();
  }

  /**
   * Checks if the interaction number is visible.
   * @return {Promise<boolean>} True if the interaction number is visible, false otherwise.
   */
  async hasInteractionNumber(): Promise<boolean> {
    try {
      this.logger.info('Checking if the interaction number is visible');
      await this.interactionNumber.waitFor({ state: 'attached' });
      return await this.interactionNumber.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for interaction number visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the interaction number.
   * @return {Promise<string | null>} The text content of the interaction number.
   */
  async getInteractionNumberText(): Promise<string | null> {
    this.logger.info('Getting the text of the interaction number');
    await this.interactionNumber.waitFor({ state: 'attached' });
    return await this.interactionNumber.textContent();
  }

}
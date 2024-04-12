import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for PreviewPage
 */
export class PreviewPage extends BaseComponent {
  private container;
  private readonly iaMessage: Locator;
  private readonly myMessage: Locator;
  private readonly messageField: Locator;
  private readonly sendButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.iaMessage = this.container.locator('[data-testid="chat-message-received"]');
    this.myMessage = this.container.locator('[data-testid="chat-message-sent"]');
    this.messageField = this.container.locator('[data-testid="chat-input"]');
    this.sendButton = this.container.locator('[data-testid="chat-button"]');
  }

  /**
   * Checks if the IA message is visible.
   * @return {Promise<boolean>} True if the IA message is visible, false otherwise.
   */
  async isIaMessageVisible(): Promise<boolean> {
    this.logger.info('Checking if the IA message is visible');
    try {
      await this.iaMessage.waitFor({ state: 'attached' });
      return await this.iaMessage.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the IA message:', error);
      return false;
    }
  }

  /**
   * Checks if the My message is visible.
   * @return {Promise<boolean>} True if the My message is visible, false otherwise.
   */
  async isMyMessageVisible(): Promise<boolean> {
    this.logger.info('Checking if the My message is visible');
    try {
      await this.myMessage.waitFor({ state: 'attached' });
      return await this.myMessage.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the My message:', error);
      return false;
    }
  }

  /**
   * Enters text into the message field.
   * @param {string} message The message to be entered into the field.
   */
  async enterMessage(message: string): Promise<void> {
    this.logger.info('Entering message into the message field');
    await this.messageField.waitFor({ state: 'attached' });
    await this.messageField.fill(message);
  }

  /**
   * Clicks on the Send button.
   */
  async clickSendButton(): Promise<void> {
    this.logger.info('Clicking on the Send button');
    await this.sendButton.waitFor({ state: 'attached' });
    await this.sendButton.click();
  }
    
}

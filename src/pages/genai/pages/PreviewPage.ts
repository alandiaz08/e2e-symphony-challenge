import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";

/**
 * Class for PreviewPage
 */
export class PreviewPage extends basePage {
  private readonly iaMessage: Locator;
  private readonly myMessage: Locator;
  private readonly messageField: Locator;
  private readonly sendButton: Locator;
  private readonly chatContainer: Locator;


  constructor(page: Page) {
    super(page);
    this.chatContainer = this.page.locator('[data-testid="chat-wrapper"]')
    this.iaMessage = this.chatContainer.locator('[data-testid="chat-message-received"]');
    this.myMessage = this.chatContainer.locator('[data-testid="chat-message-sent"]');
    this.messageField = this.chatContainer.getByTestId('chat-input');
    this.sendButton = this.chatContainer.locator('[data-testid="chat-button"]');
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
    await this.page.waitForTimeout(3000);
    //await this.messageField.waitFor({ state: 'attached' });
    await this.messageField.fill(message, { force: true });
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

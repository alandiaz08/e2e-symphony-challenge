import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAnswersInteractions
 */
export class ProjectsAnswersInteractions extends BaseComponent {
  private container;
  private readonly iaMessage: Locator;
  private readonly myMessage: Locator;
  private readonly interactionDate: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.myMessage= this.container.locator('[data-testid="chat-message-sent"] > div > div + div');
    this.iaMessage = this.container.locator('[data-testid="chat-message-received"] > div > div + div');
    this.interactionDate = this.container.locator('[id="chat-scroll"] > div').nth(0);
  }

  /**
   * Checks if the IA message is visible.
   * @return {Promise<boolean>} True if the IA message is visible, false otherwise.
   */
  async hasIaMessage(): Promise<boolean> {
    try {
      this.logger.info('Checking if the IA message is visible');
      await this.iaMessage.waitFor({ state: 'attached' });
      return await this.iaMessage.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for IA message visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the IA message.
   * @return {Promise<string | null>} The text content of the IA message.
   */
  async getIaMessageText(): Promise<string | null> {
    this.logger.info('Getting the text of the IA message');
    await this.iaMessage.waitFor({ state: 'attached' });
    return await this.iaMessage.textContent();
  }

  /**
   * Checks if the My message is visible.
   * @return {Promise<boolean>} True if the My message is visible, false otherwise.
   */
  async hasMyMessage(): Promise<boolean> {
    try {
      this.logger.info('Checking if the My message is visible');
      await this.myMessage.waitFor({ state: 'attached' });
      return await this.myMessage.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for My message visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the My message.
   * @return {Promise<string | null>} The text content of the My message.
   */
  async getMyMessageText(): Promise<string | null> {
    this.logger.info('Getting the text of the My message');
    await this.myMessage.waitFor({ state: 'attached' });
    return await this.myMessage.textContent();
  }

  /**
   * Checks if the interaction date is visible.
   * @return {Promise<boolean>} True if the interaction date is visible, false otherwise.
   */
  async hasInteractionDate(): Promise<boolean> {
    try {
      this.logger.info('Checking if the interaction date is visible');
      await this.interactionDate.waitFor({ state: 'attached' });
      return await this.interactionDate.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for interaction date visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the interaction date.
   * @return {Promise<string | null>} The text content of the interaction date.
   */
  async getInteractionDateText(): Promise<string | null> {
    this.logger.info('Getting the text of the interaction date');
    await this.interactionDate.waitFor({ state: 'attached' });
    return await this.interactionDate.textContent();
  }

}
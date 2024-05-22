import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAnswers
 */
export class ProjectsAnswers extends BaseComponent {
  private container;
  private readonly conversationListContainer: Locator;
  private readonly conversationContainer: Locator;
  private readonly contextContainer: Locator;
  private readonly timeFilter: Locator;
  private readonly timeFilterLastYear: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.conversationListContainer = this.container.locator('[class="scrollbar-container ps"]');
    this.conversationContainer = this.container.locator('[id="chat-scroll"]');
    this.contextContainer = this.container.locator('[data-testid="context-card"]');
    this.timeFilter = this.container.locator('[data-testid="dropdown-button"]');
    this.timeFilterLastYear = this.page.getByRole('menuitem', { name: 'Último año' });
  }

  /**
   * Retrieves the container for the conversation list.
   * @return {Locator} The locator for the conversation list container.
   */
  async getConversationListContainer(): Promise<Locator> {
    this.logger.info('Retrieving the conversation list container');
    await this.conversationListContainer.waitFor({ state: 'attached' });
    return this.conversationListContainer;
  }

  /**
   * Retrieves the container for an individual conversation.
   * @return {Locator} The locator for the conversation container.
   */
  async getConversationContainer(): Promise<Locator> {
    this.logger.info('Retrieving the conversation container');
    await this.conversationContainer.waitFor({ state: 'attached' });
    return this.conversationContainer;
  }

  /**
   * Retrieves the container for the context of a conversation.
   * @return {Locator} The locator for the context container.
   */
  async getContextContainer(): Promise<Locator> {
    this.logger.info('Retrieving the context container');
    await this.contextContainer.waitFor({ state: 'attached' });
    return this.contextContainer;
  }

  /**
   * Selects the last year option from the time filter.
   */
  async selectLastYearFromTimeFilter(): Promise<void> {
    this.logger.info('Selecting last year from time filter');
    await this.timeFilter.waitFor({ state: 'attached' });
    await this.timeFilter.click();
    await this.timeFilterLastYear.waitFor({ state: 'attached' });
    await this.timeFilterLastYear.click();
  }
}
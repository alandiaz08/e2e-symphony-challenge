import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAnswersConversationResultList
 */
export class ProjectsAnswersConversationResultList extends BaseComponent {
  private readonly cardListItems: Locator;
  private container;

  /**
   * Constructor of the class
   * @param page
   * @param container
   */
  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.cardListItems = this.container.locator('[data-testid="interaction-card"]');
  }

  async getConversationCardItems(): Promise<Locator[]> {
    await this.cardListItems.first().waitFor({ state: 'attached' })
    return this.cardListItems.all();
  }

  async getConversationCardItemsByIndex(index): Promise<Locator> {
    const cardsItems = await this.getConversationCardItems();
    if (index >= 0 && index < cardsItems.length) {
      return cardsItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
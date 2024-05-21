import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsIntegrationsCardsResultList
 */
export class ProjectsIntegrationsCardsResultList extends BaseComponent {
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
    this.cardListItems = this.container.locator('[data-testid="integration-card"]');
  }

  async getIntegrationsCardItems(): Promise<Locator[]> {
    await this.cardListItems.first().waitFor({ state: 'attached' })
    return this.cardListItems.all();
  }

  async getIntegrationsCardItemsByIndex(index): Promise<Locator> {
    const cardsItems = await this.getIntegrationsCardItems();
    if (index >= 0 && index < cardsItems.length) {
      return cardsItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
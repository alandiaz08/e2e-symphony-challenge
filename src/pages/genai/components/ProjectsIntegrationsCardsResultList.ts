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
    await this.page.waitForTimeout(5000);
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

  /**
  * Method to check if a card exists by its title
  * @param title
  * @returns boolean
  */
  async isIntegrationCardPresentByTitle(title: string): Promise<boolean> {
    const cardsItems = await this.getIntegrationsCardItems();
    for (const card of cardsItems) {
      const cardTitle = await card.locator('h5').innerText();
      if (cardTitle.trim() === title) {
        return true;
      }
    }
    return false;
  }

  /**
   * Method to search for a card by its title
   * @param title
   */
  async getIntegrationCardByTitle(title: string): Promise<Locator> {
    const cardsItems = await this.getIntegrationsCardItems();
    for (const card of cardsItems) {
      const cardTitle = await card.locator('h5').innerText();
      if (cardTitle.trim() === title) {
        return card;
      }
    }
    throw new Error(`No card found with title: ${title}`);
  }  
}
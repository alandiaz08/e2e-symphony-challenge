import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for personalitySettingsIaContainerResultList
 */
export class PersonalitySettingsIaContainerResultList extends BaseComponent {
  private readonly projectsListItems: Locator;
  private container;

  /**
   * Constructor of the class
   * @param page
   * @param container
   */
  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.projectsListItems = this.container.locator('div');
  }

  async getPersonalitySettingsIaItems(): Promise<Locator[]> {
    await this.projectsListItems.first().waitFor({ state: 'attached' })
    return this.projectsListItems.all();
  }

  async getPersonalitySettingsIaItemsByIndex(index): Promise<Locator> {
    const personalitySettingsIaItems = await this.getPersonalitySettingsIaItems();
    if (index >= 0 && index < personalitySettingsIaItems.length) {
      return personalitySettingsIaItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
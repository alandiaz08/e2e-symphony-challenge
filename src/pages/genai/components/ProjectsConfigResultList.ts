import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsConfigResultList
 */
export class ProjectsConfigResultList extends BaseComponent {
  private readonly projectsConfigItems: Locator;
  private container;

  /**
   * Constructor of the class
   * @param page
   * @param container
   */
  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.projectsConfigItems = this.container.locator('[data-testid="edit-prompt-card"]');
  }

  async getConfigCardItems(): Promise<Locator[]> {
    await this.projectsConfigItems.first().waitFor({ state: 'attached' })
    return this.projectsConfigItems.all();
  }

  async getConfigCardItemsByIndex(index): Promise<Locator> {
    const configItems = await this.getConfigCardItems();
    if (index >= 0 && index < configItems.length) {
      return configItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
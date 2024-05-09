import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsResultList
 */
export class ProjectsResultList extends BaseComponent {
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
    this.projectsListItems = this.container.locator('[data-testid="info-card"]');
  }

  async getProjectsItems(): Promise<Locator[]> {
    await this.projectsListItems.first().waitFor({ state: 'attached' })
    return this.projectsListItems.all();
  }

  async getProjectsItemsByIndex(index): Promise<Locator> {
    const projectsItems = await this.getProjectsItems();
    if (index >= 0 && index < projectsItems.length) {
      return projectsItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
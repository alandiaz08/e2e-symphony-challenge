import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsFilesResultList
 */
export class ProjectsFilesResultList extends BaseComponent {
  private readonly fileListItems: Locator;
  private container;

  /**
   * Constructor of the class
   * @param page
   * @param container
   */
  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.fileListItems = this.container.locator('div > div');
  }

  async getFileItems(): Promise<Locator[]> {
    await this.fileListItems.first().waitFor({ state: 'attached' })
    return this.fileListItems.all();
  }

  async getFileItemsByIndex(index): Promise<Locator> {
    const fileItems = await this.getFileItems();
    if (index >= 0 && index < fileItems.length) {
      return fileItems[index]
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }
}
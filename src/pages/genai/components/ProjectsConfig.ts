import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsConfig
 */
export class ProjectsConfig extends BaseComponent {
  private container;
  private readonly configListContainer: Locator;
  private readonly editContainer: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.configListContainer = this.container.locator('[data-testid="project-overview"]').nth(0);
    this.editContainer = this.container.locator('[role="dialog"]');
  }

  /**
   * Retrieves the configuration list container.
   * @return {Promise<Locator>}
   */
  async getConfigListContainer(): Promise<Locator> {
    this.logger.info('Retrieving the configuration list container');
    await this.configListContainer.waitFor({ state: 'attached' });
    return this.configListContainer;
  }

 /**
  * Retrieves the edit container.
  * @return {Promise<Locator>}
  */
  async getEditContainer(): Promise<Locator> {
    this.logger.info('Retrieving the edit container');
    await this.editContainer.waitFor({ state: 'attached' });
    return this.editContainer;
  }

}
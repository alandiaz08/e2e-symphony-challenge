import { basePage } from "../../base/basePage";
import { Locator, Page } from "@playwright/test";
import { URLBuilder } from "../../../utils/URLBuilder";
import { env } from "../../../../load-env";

export class CareersPage extends basePage {

  private readonly currentOpeningListContainer: Locator;


  /**
   * Constructor of the class.
   */
  constructor(page: Page) {
    super(page);
    this.currentOpeningListContainer =
    page.locator('[class="currentOpenings--jobs"]')
}

/**
* Retrieves the container of the current opening list.
* @returns {Promise<Locator>} - The container of the current opening list.
*/
async getcurrentOpeningListContainer() {
  this.logger.info('Retrieves the container of the current opening list');
  await this.currentOpeningListContainer.waitFor({ state: 'attached' });
  return this.currentOpeningListContainer;
}
}
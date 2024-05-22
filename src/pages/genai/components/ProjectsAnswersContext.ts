import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsAnswersContext
 */
export class ProjectsAnswersContext extends BaseComponent {
  private container;
  private readonly contextTitle: Locator;
  private readonly contextText: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.contextTitle = this.container.locator('[data-testid="context-card"] > div > img +  div');
    this.contextText = this.container.locator('[data-testid="context-card"] > div + div');
  }

/**
 * Checks if the context title is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasContextTitle(): Promise<boolean> {
  try {
    this.logger.info('Checking if the context title is visible');
    await this.contextTitle.waitFor({ state: 'attached' });
    return await this.contextTitle.isVisible();
  } catch (error) {
    this.logger.error('Error when checking for context title visibility', error);
    return false;
  }
}

/**
 * Retrieves the text content of the context title.
 * @return {Promise<string | null>} The text content.
 */
async getContextTitleText(): Promise<string | null> {
  this.logger.info('Getting the text of the context title');
  await this.contextTitle.waitFor({ state: 'attached' });
  return await this.contextTitle.textContent();
}

/**
 * Checks if the context text is visible.
 * @return {Promise<boolean>} True if visible, false otherwise.
 */
async hasContextText(): Promise<boolean> {
  try {
    this.logger.info('Checking if the context text is visible');
    await this.contextText.waitFor({ state: 'attached' });
    return await this.contextText.isVisible();
  } catch (error) {
    this.logger.error('Error when checking for context text visibility', error);
    return false;
  }
}

/**
 * Retrieves the text content of the context text.
 * @return {Promise<string | null>} The text content.
 */
async getContextTextText(): Promise<string | null> {
  this.logger.info('Getting the text of the context text');
  await this.contextText.waitFor({ state: 'attached' });
  return await this.contextText.textContent();
}

}
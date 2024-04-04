import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";


/**
 * Class for project page.
 */
export class ProjectPage extends basePage {
  private readonly projectTitle: Locator;
  private readonly newProjectButton: Locator;
  private readonly yourProjectButton: Locator;
  private readonly allProjectButton: Locator;
  private readonly newProjectModalContainer: Locator;


  /**
   * Constructor of the project page
   */
  constructor(page: Page) {
    super(page);
    this.projectTitle = page.locator('div > h1');
  }

  /**
   * Checks if the title is visible.
   * @return {Promise<boolean>}
   */
  async isTitleVisible(): Promise<boolean> {
    try {
      this.logger.info('Checking if the title is visible');
      await this.projectTitle.waitFor({ state: 'attached' });
      return await this.projectTitle.isVisible();
    } catch (error) {
      this.logger.error(`Error checking if title is visible: ${error}`);
      return false;
    }
  }

  /**
   * Retrieves the New Project Modal Container.
   * @return {Promise<Locator>} The New Project Modal Container.
   */
  async getNewProjectModalContainer(): Promise<Locator> {
    this.logger.info('Retrieving the New Project Modal Container');
    await this.newProjectModalContainer.waitFor({ state: 'attached' });
    return this.newProjectModalContainer;
  }

  /**
   * Checks if the New Project button is visible.
   * @return {Promise<boolean>} True if the New Project button is visible, false otherwise.
   */
  async isNewProjectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the New Project button is visible');
    try {
      await this.newProjectButton.waitFor({ state: 'attached' });
      return await this.newProjectButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the New Project button:', error);
      return false;
    }
  }

  /**
   * Clicks on the New Project button.
   */
  async clickNewProjectButton(): Promise<void> {
    this.logger.info('Clicking on the New Project button');
    await this.newProjectButton.waitFor({ state: 'attached' });
    await this.newProjectButton.click();
  }

  /**
   * Retrieves the text of the New Project button.
   * @return {Promise<string>}
   */
  async getNewProjectButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the New Project button');
    await this.newProjectButton.waitFor({ state: 'attached' });
    return await this.newProjectButton.textContent();
  }

  /**
   * Checks if the Your Project button is visible.
   * @return {Promise<boolean>} True if the Your Project button is visible, false otherwise.
   */
  async isYourProjectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Your Project button is visible');
    try {
      await this.yourProjectButton.waitFor({ state: 'attached' });
      return await this.yourProjectButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Your Project button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Your Project button.
   */
  async clickYourProjectButton(): Promise<void> {
    this.logger.info('Clicking on the Your Project button');
    await this.yourProjectButton.waitFor({ state: 'attached' });
    await this.yourProjectButton.click();
  }

  /**
   * Retrieves the text of the Your Project button.
   * @return {Promise<string>}
   */
  async getYourProjectButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the Your Project button');
    await this.yourProjectButton.waitFor({ state: 'attached' });
    return await this.yourProjectButton.textContent();
  }

  /**
   * Checks if the All Project button is visible.
   * @return {Promise<boolean>} True if the All Project button is visible, false otherwise.
   */
  async isAllProjectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the All Project button is visible');
    try {
      await this.allProjectButton.waitFor({ state: 'attached' });
      return await this.allProjectButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the All Project button:', error);
      return false;
    }
  }

  /**
   * Clicks on the All Project button.
   */
  async clickAllProjectButton(): Promise<void> {
    this.logger.info('Clicking on the All Project button');
    await this.allProjectButton.waitFor({ state: 'attached' });
    await this.allProjectButton.click();
  }

  /**
   * Retrieves the text of the All Project button.
   * @return {Promise<string>}
   */
  async getAllProjectButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the All Project button');
    await this.allProjectButton.waitFor({ state: 'attached' });
    return await this.allProjectButton.textContent();
  }

}
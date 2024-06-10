import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsFilesResultItem
 */
export class ProjectsFilesResultItem extends BaseComponent {
  private container;
  private readonly fileName: Locator;
  private readonly filePicture: Locator;
  private readonly fileWeight: Locator;
  private readonly fileStatus: Locator
  private readonly action: Locator;
  private readonly downloadButton: Locator;
  private readonly deleteButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.fileName = this.container.locator('div + h5');
    this.filePicture = this.container.locator('img');
    this.fileWeight = this.container.locator('h5 + h5');
    this.fileStatus = this.container.locator('');
    this.action = this.container.locator('[data-testid="MoreVertIcon"]');
    this.downloadButton = this.page.locator('[role="menu"] > li:nth-child(1)');
    this.deleteButton = this.page.locator('[role="menu"] > li:nth-child(2)');

  }

  /**
   * Checks if the file name is visible.
   * @return {Promise<boolean>} True if the file name is visible, false otherwise.
   */
  async hasFileName(): Promise<boolean> {
    this.logger.info('Checking if the file name is visible');
    try {
      await this.fileName.waitFor({ state: 'attached' });
      return await this.fileName.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for file name visibility', error);
      return false;
    }
  }

  /**
  * Retrieves the text content of the file name.
  * @return {Promise<string | null>} The text content of the file name.
  */
  async getFileNameText(): Promise<string | null> {
    this.logger.info('Getting the text of the file name');
    await this.fileName.waitFor({ state: 'attached' });
    return await this.fileName.textContent();
  }

  /**
  * Checks if the file picture is visible.
  * @return {Promise<boolean>} True if the file picture is visible, false otherwise.
  */
  async hasFilePicture(): Promise<boolean> {
    this.logger.info('Checking if the file picture is visible');
    try {
      await this.filePicture.waitFor({ state: 'attached' });
      return await this.filePicture.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for file picture visibility', error);
      return false;
    }
  }

  /**
  * Checks if the file weight is visible.
  * @return {Promise<boolean>} True if the file weight is visible, false otherwise.
  */
  async hasFileWeight(): Promise<boolean> {
    this.logger.info('Checking if the file weight is visible');
    try {
      await this.fileWeight.waitFor({ state: 'attached' });
      return await this.fileWeight.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for file weight visibility', error);
      return false;
    }
  }

  /**
  * Retrieves the text content of the file weight.
  * @return {Promise<string | null>} The text content of the file weight.
  */
  async getFileWeightText(): Promise<string | null> {
    this.logger.info('Getting the text of the file weight');
    await this.fileWeight.waitFor({ state: 'attached' });
    return await this.fileWeight.textContent();
  }

  /**
  * Checks if the file status is visible.
  * @return {Promise<boolean>} True if the file status is visible, false otherwise.
  */
  async hasFileStatus(): Promise<boolean> {
    this.logger.info('Checking if the file status is visible');
    try {
      await this.fileStatus.waitFor({ state: 'attached' });
      return await this.fileStatus.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for file status visibility', error);
      return false;
    }
  }

  /**
  * Retrieves the text content of the file status.
  * @return {Promise<string | null>} The text content of the file status.
  */
  async getFileStatusText(): Promise<string | null> {
    this.logger.info('Getting the text of the file status');
    await this.fileStatus.waitFor({ state: 'attached' });
    return await this.fileStatus.textContent();
  }

  /**
  * Clicks the action button.
  */
  async clickActionButton(): Promise<void> {
    this.logger.info('Clicking the action button');
    await this.action.waitFor({ state: 'attached' });
    await this.action.click();
  }

  /**
  * Clicks the download button.
  */
  async clickDownloadButton(): Promise<void> {
    this.logger.info('Clicking the download button');
    await this.clickActionButton();
    await this.downloadButton.waitFor({ state: 'attached' });
    await this.downloadButton.click();
  }

  /**
  * Clicks the delete button.
  */
  async clickDeleteButton(): Promise<void> {
    this.logger.info('Clicking the delete button');
    await this.clickActionButton();
    await this.deleteButton.waitFor({ state: 'attached' });
    await this.deleteButton.click();
  }

}
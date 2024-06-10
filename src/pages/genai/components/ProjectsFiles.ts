import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsFiles
 */
export class ProjectsFiles extends BaseComponent {
  private container;
  private readonly uploadFileButton: Locator;
  private readonly uploadFilePopupContainer: Locator;
  private readonly fileListContainer: Locator;
  private readonly fileMessage: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.uploadFileButton = this.container.locator('[data-testid="upload-file-button"]');
    this.uploadFilePopupContainer = this.page.locator('[role="dialog"]');
    this.fileListContainer = this.container.locator('[data-testid="uploaded-file-list"]');
    this.fileMessage = this.container.locator('img + h4');
  }

  /**
   * Checks if the upload file button is visible and clickable.
   * @return {Promise<boolean>} True if visible and clickable, false otherwise.
   */
  async hasUploadFileButton(): Promise<boolean> {
    try {
      this.logger.info('Checking if the upload file button is visible and clickable');
      await this.uploadFileButton.waitFor({ state: 'attached' });
      return await this.uploadFileButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for upload file button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the upload file button.
   */
  async clickUploadFileButton(): Promise<void> {
    this.logger.info('Clicking the upload file button');
    await this.uploadFileButton.waitFor({ state: 'attached' });
    await this.uploadFileButton.click();
  }

  /**
   * Retrieves the container of the upload file popup.
   * @returns {Locator} The container of the upload file popup.
   */
  async getUploadFilePopupContainer() {
    this.logger.info('Retrieving the container of the upload file popup');
    await this.uploadFilePopupContainer.waitFor({ state: 'attached' });
    return this.uploadFilePopupContainer;
  }

  /**
   * Retrieves the file list container.
   * @returns {Promise<Locator>} The file list container.
   */
  async getFileListContainer(): Promise<Locator> {
    this.logger.info('Retrieving the file list container');
    await this.fileListContainer.waitFor({ state: 'attached' });
    return this.fileListContainer;
  }

  /**
   * Checks if the file message is visible.
   * @return {Promise<boolean>} True if the file message is visible, false otherwise.
   */
  async hasFileMessage(): Promise<boolean> {
    this.logger.info('Checking if the file message is visible');
    try {
      await this.fileMessage.waitFor({ state: 'attached' });
      return await this.fileMessage.isVisible();
    } catch (error) {
      this.logger.error('Error when checking for file message visibility', error);
      return false;
    }
  }

  /**
  * Retrieves the text content of the file message.
  * @return {Promise<string | null>} The text content of the file message.
  */
  async getFileMessageText(): Promise<string | null> {
    this.logger.info('Getting the text of the file message');
    await this.fileMessage.waitFor({ state: 'attached' });
    return await this.fileMessage.textContent();
  }

}
import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsFiles
 */
export class ProjectsFiles extends BaseComponent {
  private container;
  private readonly uploadFileButton: Locator;
  private readonly uploadFilePopupContainer: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.uploadFileButton = this.container.locator('[data-testid="upload-file-button"]');
    this.uploadFilePopupContainer = this.container.locator('[role="dialog"]');
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

}
import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";
import * as path from "path";

/**
 * Class for ProjectsFiles
 */
export class ProjectsFiles extends BaseComponent {
  private container;
  private readonly uploadFileButton: Locator;
  private readonly selectFileButton: Locator;
  private readonly cancelButton: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.uploadFileButton = this.container.locator('[data-testid="upload-file-button"]');
    this.selectFileButton = this.container.locator('[role="dialog"]');
    this.cancelButton = this.container.locator('[role="dialog"]');
  }

  /**
   * Uploads a PDF file to the project.
   * This method sets the input field for file uploads with a PDF file path
   * based on the given file name.
   *
   * @param {string} fileName - The name of the PDF file to upload.
   * @throws {Error} Throws an error if the file cannot be uploaded.
   */
  async uploadProjectFile(fileName) {
    const env = process.env.WORKSPACE || process.cwd();
    this.logger.info("The env value is: ", env);

    const filePath = path.join(env, 'test-data', 'files', fileName);
    this.logger.info("file filePath: ", filePath);

    try {
      this.logger.info("Upload the file");
      await this.selectFileButton.setInputFiles(filePath);
      await this.page.waitForTimeout(1000);
    } catch (error) {
      console.error("Problem when opening the file", error);
      throw new Error(error);
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
   * Clicks the cancel button.
   */
  async clickCancelButton(): Promise<void> {
    this.logger.info('Clicking the cancel button');
    await this.cancelButton.waitFor({ state: 'attached' });
    await this.cancelButton.click();
  }

}
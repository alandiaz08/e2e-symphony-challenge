import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsResultItem
 */
export class ProjectsResultItem extends BaseComponent {
  private container;
  private readonly projectName: Locator;
  private readonly projectDescription: Locator;
  private readonly projectPicture: Locator;
  private readonly projectFavoritesStarButton: Locator


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.projectName = this.container.locator('span > h4');
    this.projectDescription = this.container.locator('span > h6');
    this.projectPicture = this.container.locator('div > img');
    this.projectFavoritesStarButton = this.container.locator('button > span + span');
  }

/**
 * Checks if the project name is visible.
 * @return {Promise<boolean>} True if the project name is visible, false otherwise.
 */
async isProjectNameVisible(): Promise<boolean> {
  this.logger.info('Checking if the project name is visible');
  try {
    await this.projectName.waitFor({ state: 'attached' });
    return await this.projectName.isVisible();
  } catch (error) {
    this.logger.error('Error when checking visibility of the project name:', error);
    return false;
  }
}

/**
 * Retrieves the text of the project name.
 * @return {Promise<string>}
 */
async getProjectNameText(): Promise<string> {
  this.logger.info('Retrieving the text of the project name');
  await this.projectName.waitFor({ state: 'attached' });
  return await this.projectName.textContent();
}

/**
 * Checks if the project description is visible.
 * @return {Promise<boolean>} True if the project description is visible, false otherwise.
 */
async isProjectDescriptionVisible(): Promise<boolean> {
  this.logger.info('Checking if the project description is visible');
  try {
    await this.projectDescription.waitFor({ state: 'attached' });
    return await this.projectDescription.isVisible();
  } catch (error) {
    this.logger.error('Error when checking visibility of the project description:', error);
    return false;
  }
}

/**
 * Retrieves the text of the project description.
 * @return {Promise<string>}
 */
async getProjectDescriptionText(): Promise<string> {
  this.logger.info('Retrieving the text of the project description');
  await this.projectDescription.waitFor({ state: 'attached' });
  return await this.projectDescription.textContent();
}

/**
 * Checks if the project picture is visible.
 * @return {Promise<boolean>} True if the project picture is visible, false otherwise.
 */
async isProjectPictureVisible(): Promise<boolean> {
  this.logger.info('Checking if the project picture is visible');
  try {
    await this.projectPicture.waitFor({ state: 'attached' });
    return await this.projectPicture.isVisible();
  } catch (error) {
    this.logger.error('Error when checking visibility of the project picture:', error);
    return false;
  }
}

/**
 * Clicks on the project picture.
 */
async clickProjectPicture(): Promise<void> {
  this.logger.info('Clicking on the project picture');
  await this.projectPicture.waitFor({ state: 'attached' });
  await this.projectPicture.click();
}

/**
 * Checks if the project favorites star button is visible.
 * @return {Promise<boolean>} True if the project favorites star button is visible, false otherwise.
 */
async isProjectFavoritesStarButtonVisible(): Promise<boolean> {
  this.logger.info('Checking if the project favorites star button is visible');
  try {
    await this.projectFavoritesStarButton.waitFor({ state: 'attached' });
    return await this.projectFavoritesStarButton.isVisible();
  } catch (error) {
    this.logger.error('Error when checking visibility of the project favorites star button:', error);
    return false;
  }
}

/**
 * Clicks on the project favorites star button.
 */
async clickProjectFavoritesStarButton(): Promise<void> {
  this.logger.info('Clicking on the project favorites star button');
  await this.projectFavoritesStarButton.waitFor({ state: 'attached' });
  await this.projectFavoritesStarButton.click();
}

}
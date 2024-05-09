import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";


/**
 * Class for header
 */
export class header extends BaseComponent {
  private readonly projectsModule: Locator;
  private readonly foldersModule: Locator;
  private readonly ownersList: Locator;
  private readonly owners: Locator;
  private readonly accountButton: Locator;
  private readonly profileButton: Locator;
  private readonly settingsButton: Locator;
  private readonly logoutButton: Locator;



  /**
   * Constructor of the class.
   * @param page
   */
  constructor(page: Page) {
    super(page);
    this.projectsModule = this.page.locator('[href="#/projects"]');
    this.foldersModule = this.page.locator('[href="#/folders"]');
    this.ownersList = this.page.locator('[href="#/folders"]');
    this.owners = this.page.locator('[href="#/folders"]');
    this.accountButton = this.page.locator('div.css-praqp0 > div > button');
    this.profileButton = this.page.locator('div > ul > li:nth-child(1)');
    this.settingsButton = this.page.locator('div > ul > li:nth-child(2)');
    this.logoutButton = this.page.locator('div > ul > li:nth-child(3)');
  }

  /**
   * Checks if the Projects module is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isProjectsModuleVisible(): Promise<boolean> {
    this.logger.info('Checking if the Projects module is visible');
    try {
      await this.projectsModule.waitFor({ state: 'attached' });
      return await this.projectsModule.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Projects module:', error);
      return false;
    }
  }

  /**
   * Clicks on the Projects module.
   */
  async clickProjectsModule(): Promise<void> {
    this.logger.info('Clicking on the Projects module');
    await this.projectsModule.waitFor({ state: 'attached' });
    await this.projectsModule.click();
  }

  /**
   * Retrieves the text of the Projects module.
   * @return {Promise<string>}
   */
  async getProjectsModuleText(): Promise<string> {
    this.logger.info('Retrieving the text of the Projects module');
    await this.projectsModule.waitFor({ state: 'attached' });
    return await this.projectsModule.textContent();
  }

  /**
   * Checks if the Folders module is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isFoldersModuleVisible(): Promise<boolean> {
    this.logger.info('Checking if the Folders module is visible');
    try {
      await this.foldersModule.waitFor({ state: 'attached' });
      return await this.foldersModule.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Folders module:', error);
      return false;
    }
  }

  /**
   * Clicks on the Folders module.
   */
  async clickFoldersModule(): Promise<void> {
    this.logger.info('Clicking on the Folders module');
    await this.foldersModule.waitFor({ state: 'attached' });
    await this.foldersModule.click();
  }

  /**
   * Retrieves the text of the Folders module.
   * @return {Promise<string>}
   */
  async getFoldersModuleText(): Promise<string> {
    this.logger.info('Retrieving the text of the Folders module');
    await this.foldersModule.waitFor({ state: 'attached' });
    return await this.foldersModule.textContent();
  }

  /**
   * Checks if the Account button is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isAccountButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Account button is visible');
    try {
      await this.accountButton.waitFor({ state: 'attached' });
      return await this.accountButton.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Account button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Account button.
   */
  async clickAccountButton(): Promise<void> {
    this.logger.info('Clicking on the Account button');
    await this.accountButton.waitFor({ state: 'attached' });
    await this.accountButton.click();
  }

  /**
   * Retrieves the text of the Account button.
   * @return {Promise<string>}
   */
  async getAccountButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the Account button');
    await this.accountButton.waitFor({ state: 'attached' });
    return await this.accountButton.textContent();
  }

  /**
   * Checks if the Profile button is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isProfileButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Profile button is visible');
    try {
      await this.profileButton.waitFor({ state: 'attached' });
      return await this.profileButton.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Profile button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Profile button.
   */
  async clickProfileButton(): Promise<void> {
    this.logger.info('Clicking on the Profile button');
    await this.profileButton.waitFor({ state: 'attached' });
    await this.profileButton.click();
  }

  /**
   * Retrieves the text of the Profile button.
   * @return {Promise<string>}
   */
  async getProfileButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the Profile button');
    await this.profileButton.waitFor({ state: 'attached' });
    return await this.profileButton.textContent();
  }

  /**
   * Checks if the Settings button is visible.
   * @return {Promise<boolean>} True if the Settings button is visible, false otherwise.
   */
  async isSettingsButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Settings button is visible');
    try {
      await this.settingsButton.waitFor({ state: 'attached' });
      return await this.settingsButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Settings button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Settings button.
   */
  async clickSettingsButton(): Promise<void> {
    this.logger.info('Clicking on the Settings button');
    await this.settingsButton.waitFor({ state: 'attached' });
    await this.settingsButton.click();
  }

  /**
   * Retrieves the text of the Settings button.
   * @return {Promise<string>}
   */
  async getSettingsButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the Settings button');
    await this.settingsButton.waitFor({ state: 'attached' });
    return await this.settingsButton.textContent();
  }

  /**
   * Checks if the Logout button is visible.
   * @return {Promise<boolean>} True if the Logout button is visible, false otherwise.
   */
  async isLogoutButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Logout button is visible');
    try {
      await this.logoutButton.waitFor({ state: 'attached' });
      return await this.logoutButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Logout button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Logout button.
   */
  async clickLogoutButton(): Promise<void> {
    this.logger.info('Clicking on the Logout button');
    await this.logoutButton.waitFor({ state: 'attached' });
    await this.logoutButton.click();
  }

  /**
   * Retrieves the text of the Logout button.
   * @return {Promise<string>}
   */
  async getLogoutButtonText(): Promise<string> {
    this.logger.info('Retrieving the text of the Logout button');
    await this.logoutButton.waitFor({ state: 'attached' });
    return await this.logoutButton.textContent();
  }

  /**
   * Clicks on the owners list.
   */
  async clickOwnersList(): Promise<void> {
    this.logger.info('Clicking on the owners list');
    await this.ownersList.waitFor({ state: 'attached' });
    await this.ownersList.click();
  }

  /**
   * Checks if the owners list is visible.
   * @return {Promise<boolean>} True if the owners list is visible, false otherwise.
   */
  async isOwnersListVisible(): Promise<boolean> {
    this.logger.info('Checking if the owners list is visible');
    try {
      await this.ownersList.waitFor({ state: 'attached' });
      return await this.ownersList.isVisible();
    } catch (error) {
      this.logger.error('Error while checking for owners list visibility:', error);
      return false;
    }
  }

  /**
   * Clicks on the owners element.
   */
  async clickOwners(): Promise<void> {
    this.logger.info('Clicking on the owners element');
    await this.owners.waitFor({ state: 'attached' });
    await this.owners.click();
  }

  /**
   * Checks if the owners element is visible.
   * @return {Promise<boolean>} True if the owners element is visible, false otherwise.
   */
  async isOwnersVisible(): Promise<boolean> {
    this.logger.info('Checking if the owners element is visible');
    try {
      await this.owners.waitFor({ state: 'attached' });
      return await this.owners.isVisible();
    } catch (error) {
      this.logger.error('Error while checking for owners element visibility:', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the owners element.
   * @return {Promise<string | null>} The text content of the owners element.
   */
  async getOwnersText(): Promise<string | null> {
    this.logger.info('Getting the text of the owners element');
    await this.owners.waitFor({ state: 'attached' });
    return await this.owners.textContent();
  }

}
import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";


/**
 * Class for header
 */
export class header extends BaseComponent {
  private readonly projectsModule: Locator;
  private readonly foldersModule: Locator;
  private readonly integrationsModule: Locator;
  private readonly analyticsModule: Locator;
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
    this.integrationsModule = this.page.locator('[href="#/integrations"]');
    this.analyticsModule = this.page.locator('[href="#/integrations"]');
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
   * Checks if the Integrations module is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isIntegrationsModuleVisible(): Promise<boolean> {
    this.logger.info('Checking if the Integrations module is visible');
    try {
      await this.integrationsModule.waitFor({ state: 'attached' });
      return await this.integrationsModule.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Integrations module:', error);
      return false;
    }
  }

  /**
   * Clicks on the Integrations module.
   */
  async clickIntegrationsModule(): Promise<void> {
    this.logger.info('Clicking on the Integrations module');
    await this.integrationsModule.waitFor({ state: 'attached' });
    await this.integrationsModule.click();
  }

  /**
   * Retrieves the text of the Integrations module.
   * @return {Promise<string>}
   */
  async getIntegrationsModuleText(): Promise<string> {
    this.logger.info('Retrieving the text of the Integrations module');
    await this.integrationsModule.waitFor({ state: 'attached' });
    return await this.integrationsModule.textContent();
  }

  /**
   * Checks if the Analytics module is visible.
   * @return {Promise<boolean>} True if visible, false otherwise.
   */
  async isAnalyticsModuleVisible(): Promise<boolean> {
    this.logger.info('Checking if the Analytics module is visible');
    try {
      await this.analyticsModule.waitFor({ state: 'attached' });
      return await this.analyticsModule.isVisible();
    } catch (error) {
      this.logger.error('Error checking visibility of Analytics module:', error);
      return false;
    }
  }

  /**
   * Clicks on the Analytics module.
   */
  async clickAnalyticsModule(): Promise<void> {
    this.logger.info('Clicking on the Analytics module');
    await this.analyticsModule.waitFor({ state: 'attached' });
    await this.analyticsModule.click();
  }

  /**
   * Retrieves the text of the Analytics module.
   * @return {Promise<string>}
   */
  async getAnalyticsModuleText(): Promise<string> {
    this.logger.info('Retrieving the text of the Analytics module');
    await this.analyticsModule.waitFor({ state: 'attached' });
    return await this.analyticsModule.textContent();
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

}
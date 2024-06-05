import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsIntegrationsCardsResultItem
 */
export class ProjectsIntegrationsCardsResultItem extends BaseComponent {
  private container;
  private readonly integrationName: Locator;
  private readonly integrationDescription: Locator;
  private readonly integrationPicture: Locator;
  private readonly connectButton: Locator
  private readonly learnMoreButton: Locator
  private readonly logo: Locator;
  private readonly seeMoreDetails: Locator


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.integrationName = this.container.locator('h5');
    this.integrationDescription = this.container.locator('h6');
    this.integrationPicture = this.container.locator('[alt="Whatsapp Logo"]');
    this.connectButton = this.container.locator('div button:nth-child(1)');
    this.learnMoreButton = this.container.locator('div button:nth-child(2)');
    this.seeMoreDetails = this.container.getByRole('button', { name: 'Ver detalles' });
  }

  /**
   * Checks if the integration name is visible.
   * @return {Promise<boolean>}
   */
  async isIntegrationNameVisible(): Promise<boolean> {
    this.logger.info('Checking if the integration name is visible');
    try {
      await this.integrationName.waitFor({ state: 'attached' });
      return await this.integrationName.isVisible();
    } catch (error) {
      this.logger.error('Error checking integration name visibility:', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the integration name.
   * @return {Promise<string>}
   */
  async getIntegrationNameText(): Promise<string | null> {
    this.logger.info('Getting the integration name text');
    await this.integrationName.waitFor({ state: 'attached' });
    return await this.integrationName.textContent();
  }

  /**
   * Checks if the integration description is visible.
   * @return {Promise<boolean>}
   */
  async isIntegrationDescriptionVisible(): Promise<boolean> {
    this.logger.info('Checking if the integration description is visible');
    try {
      await this.integrationDescription.waitFor({ state: 'attached' });
      return await this.integrationDescription.isVisible();
    } catch (error) {
      this.logger.error('Error checking integration description visibility:', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the integration description.
   * @return {Promise<string>}
   */
  async getIntegrationDescriptionText(): Promise<string | null> {
    this.logger.info('Getting the integration description text');
    await this.integrationDescription.waitFor({ state: 'attached' });
    return await this.integrationDescription.textContent();
  }

  /**
   * Checks if the integration picture is visible.
   * @return {Promise<boolean>}
   */
  async isIntegrationPictureVisible(): Promise<boolean> {
    this.logger.info('Checking if the integration picture is visible');
    try {
      await this.integrationPicture.waitFor({ state: 'attached' });
      return await this.integrationPicture.isVisible();
    } catch (error) {
      this.logger.error('Error checking integration picture visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the connect button is visible.
   * @return {Promise<boolean>}
   */
  async isConnectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the connect button is visible');
    try {
      await this.connectButton.waitFor({ state: 'attached' });
      return await this.connectButton.isVisible();
    } catch (error) {
      this.logger.error('Error checking connect button visibility:', error);
      return false;
    }
  }

  /**
   * Clicks the connect button.
   */
  async clickConnectButton(): Promise<void> {
    this.logger.info('Clicking the connect button');
    await this.connectButton.waitFor({ state: 'attached' });
    await this.connectButton.click();
  }

  /**
   * Checks if the learn more button is visible.
   * @return {Promise<boolean>}
   */
  async isLearnMoreButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the learn more button is visible');
    try {
      await this.learnMoreButton.waitFor({ state: 'attached' });
      return await this.learnMoreButton.isVisible();
    } catch (error) {
      this.logger.error('Error checking learn more button visibility:', error);
      return false;
    }
  }

  /**
   * Clicks the learn more button.
   */
  async clickLearnMoreButton(): Promise<void> {
    this.logger.info('Clicking the learn more button');
    await this.learnMoreButton.waitFor({ state: 'attached' });
    await this.learnMoreButton.click();
  }

  /**
   * Clicks the see more details button.
   */
  async clickSeeMoreDetailsButton(): Promise<void> {
    this.logger.info('Clicking the learn more button');
    await this.page.waitForTimeout(1000);
    await this.seeMoreDetails.waitFor({ state: 'attached' });
    await this.seeMoreDetails.click();
  }  
}
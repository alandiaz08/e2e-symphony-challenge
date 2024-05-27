import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsIntegrations
 */
export class ProjectsIntegrations extends BaseComponent {
  private container;
  private readonly customApiConnectorButton: Locator;
  private readonly integrationCardListContainer: Locator;
  private readonly connectCustomApiModalContainer: Locator;
  private readonly whatsappConnectModalContainer: Locator
  private readonly genesysCloudModalContainer: Locator



  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.customApiConnectorButton = this.container.getByTestId('active-integrations-list')
      .locator('div').filter({ hasText: 'Conectar API personalizada' }).nth(1);
    this.integrationCardListContainer = this.container.locator('[data-testid="active-integrations-list"]');
    this.connectCustomApiModalContainer = this.container.locator('[role="dialog"]');
    this.whatsappConnectModalContainer = this.page.locator('[role="dialog"]');
    this.genesysCloudModalContainer = this.page.locator('[role="dialog"]');
  }

  /**
   * Clicks the custom API connector button.
   */
  async clickCustomApiConnectorButton(): Promise<void> {
    this.logger.info('Clicking the custom API connector button');
    await this.customApiConnectorButton.waitFor({ state: 'attached' });
    await this.customApiConnectorButton.click();
  }

  /**
   * Retrieves the integration card list container.
   * @return {Promise<Locator>} The integration card list container.
   */
  async getIntegrationCardListContainer(): Promise<Locator> {
    this.logger.info('Retrieving the integration card list container');
    await this.integrationCardListContainer.waitFor({ state: 'attached' });
    return this.integrationCardListContainer;
  }

  /**
   * Retrieves the connect custom API modal container.
   * @return {Promise<Locator>} The connect custom API modal container.
   */
  async getConnectCustomApiModalContainer(): Promise<Locator> {
    this.logger.info('Retrieving the connect custom API modal container');
    await this.connectCustomApiModalContainer.waitFor({ state: 'attached' });
    return this.connectCustomApiModalContainer;
  }

  /**
   * Retrieves the WhatsApp connect modal container.
   * @return {Promise<Locator>} The WhatsApp connect modal container.
   */
  async getWhatsappConnectModalContainer(): Promise<Locator> {
    this.logger.info('Retrieving the WhatsApp connect modal container');
    await this.whatsappConnectModalContainer.waitFor({ state: 'attached' });
    return this.whatsappConnectModalContainer;
  }

  /**
   * Retrieves the Genesys Cloud modal container.
   * @return {Promise<Locator>} The Genesys Cloud modal container.
   */
  async getGenesysCloudModalContainer(): Promise<Locator> {
    this.logger.info('Retrieving the Genesys Cloud modal container');
    await this.genesysCloudModalContainer.waitFor({ state: 'attached' });
    return this.genesysCloudModalContainer;
  }

}
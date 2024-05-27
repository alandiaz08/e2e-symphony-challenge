import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";


/**
 * Class for ProjectBuilderPage.
 */
export class ProjectBuilderPage extends basePage {
  private readonly projectTitleField: Locator;
  private readonly projectDescriptionField: Locator;
  private readonly addPhoto: Locator;
  //private readonly publishButton: Locator;
  private readonly previewButton: Locator;
  private readonly shareButton: Locator;
  private readonly actionButton: Locator;
  private readonly deleteButton: Locator;
  private readonly metricsButton: Locator;
  private readonly answersButton: Locator;
  private readonly filesButton: Locator;
  private readonly integrationsButton: Locator;
  private readonly flowsButton: Locator;
  private readonly configButton: Locator;
  private readonly chatContainer: Locator;
  private readonly metricsContainer: Locator;
  private readonly answersContainer: Locator;
  private readonly filesContainer: Locator;
  private readonly integrationsContainer: Locator;
  private readonly flowsContainer: Locator;
  private readonly configsContainer: Locator;
  private readonly connectApiOrDataBaseContainer: Locator;
  private readonly connectApiContainer: Locator;
  private readonly connectDataBaseContainer: Locator;


  /**
   * Constructor of the project page
   */
  constructor(page: Page) {
    super(page);
    this.projectTitleField = this.page.locator('[data-testid="edit-title-input"]');
    this.projectDescriptionField = this.page.locator('[data-testid="edit-description-input"]');
    this.addPhoto = this.page.locator('[data-testid="upload-file-label"]');
    //this.publishButton = this.page.locator('[class="css-1axyrzt"] > button:nth-child(1)');
    this.previewButton = this.page.locator('[data-testid="preview-btn"]');
    this.shareButton = this.page.locator('[data-testid="share-dialog-button"]');
    this.actionButton = this.page.locator('[data-testid="dropdown-button"]');
    this.deleteButton = this.page.locator('ul > li');
    this.metricsButton = this.page.locator('[data-testid="performance"]');
    this.answersButton = this.page.locator('[data-testid="responses"]');
    this.filesButton = this.page.locator('[data-testid="data-source"]');
    this.integrationsButton = this.page.locator('[id="simple-tab-3"]');
    this.flowsButton = this.page.locator('[data-testid="flows"]');
    this.configButton = this.page.locator('[data-testid="overview"]');
    this.chatContainer = this.page.locator('[data-testid="chat-wrapper"]');
    this.metricsContainer = this.page.locator('[id="simple-tabpanel-1"]');
    this.answersContainer = this.page.locator('[id="simple-tabpanel-2"]');
    this.filesContainer = this.page.locator('[id="simple-tabpanel-3"]');
    this.integrationsContainer = this.page.locator('[id="simple-tabpanel-4"]');
    this.flowsContainer = this.page.locator('[id="simple-tabpanel-5"]');
    this.configsContainer = this.page.locator('[id="simple-tabpanel-6"]');
    this.connectApiOrDataBaseContainer = this.page.locator('[role="dialog"]');
    this.connectApiContainer = this.page.locator('[role="dialog"]');
    this.connectDataBaseContainer = this.page.locator('[role="dialog"]');
  }

  /**
   * Enters text into the project title field.
   * @param {string} title The title to enter into the project title field.
   */
  async enterProjectTitle(title: string): Promise<void> {
    this.logger.info('Entering text into the project title field');
    await this.projectTitleField.waitFor({ state: 'attached' });
    await this.projectTitleField.fill(title);
  }

  /**
   * Enters text into the project description field.
   * @param {string} description The description to enter into the project description field.
   */
  async enterProjectDescription(description: string): Promise<void> {
    this.logger.info('Entering text into the project description field');
    await this.projectDescriptionField.waitFor({ state: 'attached' });
    await this.projectDescriptionField.fill(description);
  }

  /**
   * Checks if the Preview button is visible.
   * @return {Promise<boolean>} True if the Preview button is visible, false otherwise.
   */
  async isPreviewButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Preview button is visible');
    try {
      await this.previewButton.waitFor({ state: 'attached' });
      return await this.previewButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Preview button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Preview button.
   */
  async clickPreviewButton(): Promise<void> {
    this.logger.info('Clicking on the Preview button');
    await this.previewButton.waitFor({ state: 'attached' });
    await this.previewButton.click();
  }

  /**
   * Checks if the Share button is visible.
   * @return {Promise<boolean>} True if the Share button is visible, false otherwise.
   */
  async isShareButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Share button is visible');
    try {
      await this.shareButton.waitFor({ state: 'attached' });
      return await this.shareButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Share button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Share button.
   */
  async clickShareButton(): Promise<void> {
    this.logger.info('Clicking on the Share button');
    await this.shareButton.waitFor({ state: 'attached' });
    await this.shareButton.click();
  }

  /**
   * Checks if the Action button is visible.
   * @return {Promise<boolean>} True if the Action button is visible, false otherwise.
   */
  async isActionButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Action button is visible');
    try {
      await this.actionButton.waitFor({ state: 'attached' });
      return await this.actionButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Action button:', error);
      return false;
    }
  }

  /**
   * Checks if the Delete button is visible.
   * @return {Promise<boolean>} True if the Delete button is visible, false otherwise.
   */
  async isDeleteButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Delete button is visible');
    try {
      await this.deleteButton.waitFor({ state: 'attached' });
      return await this.deleteButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Delete button:', error);
      return false;
    }
  }

  /**
   * Clicks the Action button and then the Delete button.
   */
  async clickActionAndDelete(): Promise<void> {
    this.logger.info('Attempting to click on the Action button and then on the Delete button');
    await this.actionButton.waitFor({ state: 'attached' });
    await this.actionButton.click();
    this.logger.info('Action button clicked, now waiting for Delete button');
    await this.deleteButton.waitFor({ state: 'visible' });
    await this.deleteButton.click();
    this.logger.info('Delete button clicked successfully');
  }

  /**
   * Checks if the Integrations button is visible.
   * @return {Promise<boolean>} True if the Integrations button is visible, false otherwise.
   */
  async isIntegrationsButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Integrations button is visible');
    try {
      await this.integrationsButton.waitFor({ state: 'attached' });
      return await this.integrationsButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Integrations button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Integrations button.
   */
  async clickIntegrationsButton(): Promise<void> {
    this.logger.info('Clicking on the Integrations button');
    await this.integrationsButton.waitFor({ state: 'attached' });
    await this.integrationsButton.click();
  }

  /**
   * Retrieves the Chat container.
   * @returns {Promise<Locator>} The Chat container.
   */
  async getChatContainer() {
    this.logger.info('Retrieving the Chat container');
    await this.chatContainer.waitFor({ state: 'attached' });
    return this.chatContainer;
  }

  /**
   * Clicks on the metrics button.
   */
  async clickMetricsButton(): Promise<void> {
    this.logger.info('Clicking on the metrics button');
    await this.metricsButton.waitFor({ state: 'attached' });
    await this.metricsButton.click();
  }

  /**
   * Clicks on the answers button.
   */
  async clickAnswersButton(): Promise<void> {
    this.logger.info('Clicking on the answers button');
    await this.answersButton.waitFor({ state: 'attached' });
    await this.answersButton.click();
  }

  /**
   * Clicks on the files button.
   */
  async clickFilesButton(): Promise<void> {
    this.logger.info('Clicking on the files button');
    await this.filesButton.waitFor({ state: 'attached' });
    await this.filesButton.click();
  }

  /**
   * Clicks on the flows button.
   */
  async clickFlowsButton(): Promise<void> {
    this.logger.info('Clicking on the flows button');
    await this.flowsButton.waitFor({ state: 'attached' });
    await this.flowsButton.click();
  }

  /**
   * Clicks on the config button.
   */
  async clickConfigButton(): Promise<void> {
    this.logger.info('Clicking on the config button');
    await this.configButton.waitFor({ state: 'attached' });
    await this.configButton.click();
  }

  /**
   * Retrieves the metrics container.
   * @return {Promise<Locator>} The metrics container.
   */
  async getMetricsContainer(): Promise<Locator> {
    this.logger.info('Retrieving the metrics container');
    await this.metricsContainer.waitFor({ state: 'attached' });
    return this.metricsContainer;
  }

  /**
   * Retrieves the answers container.
   * @return {Promise<Locator>} The answers container.
   */
  async getAnswersContainer(): Promise<Locator> {
    this.logger.info('Retrieving the answers container');
    await this.answersContainer.waitFor({ state: 'attached' });
    return this.answersContainer;
  }

  /**
   * Retrieves the files container.
   * @return {Promise<Locator>} The files container.
   */
  async getFilesContainer(): Promise<Locator> {
    this.logger.info('Retrieving the files container');
    await this.filesContainer.waitFor({ state: 'attached' });
    return this.filesContainer;
  }

  /**
   * Retrieves the integrations container.
   * @return {Promise<Locator>} The integrations container.
   */
  async getIntegrationsContainer(): Promise<Locator> {
    this.logger.info('Retrieving the integrations container');
    await this.integrationsContainer.waitFor({ state: 'attached' });
    return this.integrationsContainer;
  }

  /**
   * Retrieves the flows container.
   * @return {Promise<Locator>} The flows container.
   */
  async getFlowsContainer(): Promise<Locator> {
    this.logger.info('Retrieving the flows container');
    await this.flowsContainer.waitFor({ state: 'attached' });
    return this.flowsContainer;
  }

  /**
   * Retrieves the configs container.
   * @return {Promise<Locator>} The configs container.
   */
  async getConfigsContainer(): Promise<Locator> {
    this.logger.info('Retrieving the configs container');
    await this.configsContainer.waitFor({ state: 'attached' });
    return this.configsContainer;
  }

  /**
   * Retrieves the Connect API or Database container.
   * @returns {Promise<Locator>}
   */
  async getConnectApiOrDataBaseContainer(): Promise<Locator> {
    this.logger.info('Retrieving the Connect API or Database container');
    await this.connectApiOrDataBaseContainer.waitFor({ state: 'attached' });
    return this.connectApiOrDataBaseContainer;
  }

  /**
 * Retrieves the container for Connect API.
 * @returns {Promise<Locator>}
 */
  async getConnectApiContainer(): Promise<Locator> {
    this.logger.info('Retrieving the Connect API container');
    await this.connectApiContainer.waitFor({ state: 'attached' });
    return this.connectApiContainer;
  }

  /**
   * Retrieves the container for Connect Database.
   * @returns {Promise<Locator>}
   */
  async getConnectDataBaseContainer(): Promise<Locator> {
    this.logger.info('Retrieving the Connect Database container');
    await this.connectDataBaseContainer.waitFor({ state: 'attached' });
    return this.connectDataBaseContainer;
  }

}
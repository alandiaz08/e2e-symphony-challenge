import { Locator, Page } from "@playwright/test";
import { basePage } from "../../base/basePage";


/**
 * Class for ProjectBuilderPage.
 */
export class ProjectBuilderPage extends basePage {
  private readonly projectTitleField: Locator;
  private readonly projectDescriptionField: Locator;
  private readonly addPhoto: Locator;
  private readonly publishButton: Locator;
  private readonly previewButton: Locator;
  private readonly shareButton: Locator;
  private readonly favoriteButton: Locator;
  private readonly actionButton: Locator;
  private readonly deleteButton: Locator;
  private readonly backButton: Locator;
  private readonly overviewButton: Locator;
  private readonly dataSourceButton: Locator;
  private readonly integrationsButton: Locator;
  private readonly performanceButton: Locator;
  private readonly personalitySettingsIaListContainer: Locator;
  private readonly chatContainer: Locator;

  /**
   * Constructor of the project page
   */
  constructor(page: Page) {
    super(page);
    this.projectTitleField = this.page.locator('[id="mui-18"]');
    this.projectDescriptionField = this.page.locator('[id="standard-basicx"]');
    this.addPhoto = this.page.locator('[class="jss7"]');
    this.publishButton = this.page.locator('[class="css-1axyrzt"] > button:nth-child(1)');
    this.previewButton = this.page.locator('button +a');
    this.shareButton = this.page.locator('[class="css-1axyrzt"] > button:nth-child(3)');
    this.favoriteButton = this.page.locator('[class="css-1axyrzt"] > button:nth-child(4)');
    this.actionButton = this.page.locator('[class="css-1axyrzt"] > button:nth-child(5)');
    this.deleteButton = this.page.locator('li > span');
    this.backButton = this.page.locator('[class="MuiChip-label"]');
    this.overviewButton = this.page.locator('[id="simple-tab-1"]');
    this.dataSourceButton = this.page.locator('[id="simple-tab-2"]');
    this.integrationsButton = this.page.locator('[id="simple-tab-3"]');
    this.performanceButton = this.page.locator('[id="simple-tab-4"]');
    this.personalitySettingsIaListContainer = this.page.locator('[class="MuiBox-root css-1yuhvjn"]>p>div>div>div>div:nth-child(1)');
    this.chatContainer = this.page.locator('[class="MuiBox-root css-1yuhvjn"]>p>div>div>div>div:nth-child(2)');
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
   * Checks if the Publish button is visible.
   * @return {Promise<boolean>} True if the Publish button is visible, false otherwise.
   */
  async isPublishButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Publish button is visible');
    try {
      await this.publishButton.waitFor({ state: 'attached' });
      return await this.publishButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Publish button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Publish button.
   */
  async clickPublishButton(): Promise<void> {
    this.logger.info('Clicking on the Publish button');
    await this.publishButton.waitFor({ state: 'attached' });
    await this.publishButton.click();
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
   * Checks if the Favorite button is visible.
   * @return {Promise<boolean>} True if the Favorite button is visible, false otherwise.
   */
  async isFavoriteButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Favorite button is visible');
    try {
      await this.favoriteButton.waitFor({ state: 'attached' });
      return await this.favoriteButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Favorite button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Favorite button.
   */
  async clickFavoriteButton(): Promise<void> {
    this.logger.info('Clicking on the Favorite button');
    await this.favoriteButton.waitFor({ state: 'attached' });
    await this.favoriteButton.click();
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
   * Checks if the Back button is visible.
   * @return {Promise<boolean>} True if the Back button is visible, false otherwise.
   */
  async isBackButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Back button is visible');
    try {
      await this.backButton.waitFor({ state: 'attached' });
      return await this.backButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Back button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Back button.
   */
  async clickBackButton(): Promise<void> {
    this.logger.info('Clicking on the Back button');
    await this.backButton.waitFor({ state: 'attached' });
    await this.backButton.click();
  }

  /**
   * Checks if the Overview button is visible.
   * @return {Promise<boolean>} True if the Overview button is visible, false otherwise.
   */
  async isOverviewButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Overview button is visible');
    try {
      await this.overviewButton.waitFor({ state: 'attached' });
      return await this.overviewButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Overview button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Overview button.
   */
  async clickOverviewButton(): Promise<void> {
    this.logger.info('Clicking on the Overview button');
    await this.overviewButton.waitFor({ state: 'attached' });
    await this.overviewButton.click();
  }

  /**
   * Checks if the Data Source button is visible.
   * @return {Promise<boolean>} True if the Data Source button is visible, false otherwise.
   */
  async isDataSourceButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Data Source button is visible');
    try {
      await this.dataSourceButton.waitFor({ state: 'attached' });
      return await this.dataSourceButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Data Source button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Data Source button.
   */
  async clickDataSourceButton(): Promise<void> {
    this.logger.info('Clicking on the Data Source button');
    await this.dataSourceButton.waitFor({ state: 'attached' });
    await this.dataSourceButton.click();
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
   * Checks if the Performance button is visible.
   * @return {Promise<boolean>} True if the Performance button is visible, false otherwise.
   */
  async isPerformanceButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Performance button is visible');
    try {
      await this.performanceButton.waitFor({ state: 'attached' });
      return await this.performanceButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Performance button:', error);
      return false;
    }
  }

  /**
   * Clicks on the Performance button.
   */
  async clickPerformanceButton(): Promise<void> {
    this.logger.info('Clicking on the Performance button');
    await this.performanceButton.waitFor({ state: 'attached' });
    await this.performanceButton.click();
  }

  /**
   * Retrieves the Personality Settings IA List container.
   * @returns {Promise<Locator>} The Personality Settings IA List container.
   */
  async getPersonalitySettingsIaListContainer() {
    this.logger.info('Retrieving the Personality Settings IA List container');
    await this.personalitySettingsIaListContainer.waitFor({ state: 'attached' });
    return this.personalitySettingsIaListContainer;
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

}
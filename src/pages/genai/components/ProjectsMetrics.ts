import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsMetrics
 */
export class ProjectsMetrics extends BaseComponent {
  private container;
  private readonly interactionsGraph: Locator;
  private readonly qualityGraph: Locator;
  private readonly topicsSearchGraph: Locator;
  private readonly lowQualityAnsersGraph: Locator;
  private readonly timeFilter: Locator;
  private readonly timeFilterLastYear: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.interactionsGraph = this.container.locator('canvas').first();
    this.qualityGraph = this.container.getByTestId('velocity-chart').locator('canvas');
    this.topicsSearchGraph = this.container.getByTestId('bar-horizontal-chart').locator('canvas');
    this.lowQualityAnsersGraph = this.container.getByTestId('low-quality-chart').locator('canvas');
    this.timeFilter = this.container.locator('[data-testid="dropdown-button"]');
    this.timeFilterLastYear = this.page.getByRole('menuitem', { name: 'Último año' });
  }

  /**
   * Checks if the interactions graph is visible.
   * @return {Promise<boolean>}
   */
  async isInteractionsGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the interactions graph is visible');
    try {
      await this.interactionsGraph.waitFor({ state: 'attached' });
      return await this.interactionsGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking interactions graph visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the quality graph is visible.
   * @return {Promise<boolean>}
   */
  async isQualityGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the quality graph is visible');
    try {
      await this.qualityGraph.waitFor({ state: 'attached' });
      return await this.qualityGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking quality graph visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the topics search graph is visible.
   * @return {Promise<boolean>}
   */
  async isTopicsSearchGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the topics search graph is visible');
    try {
      await this.topicsSearchGraph.waitFor({ state: 'attached' });
      return await this.topicsSearchGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking topics search graph visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the low quality answers graph is visible.
   * @return {Promise<boolean>}
   */
  async isLowQualityAnswersGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the low quality answers graph is visible');
    try {
      await this.lowQualityAnsersGraph.waitFor({ state: 'attached' });
      return await this.lowQualityAnsersGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking low quality answers graph visibility:', error);
      return false;
    }
  }

  /**
   * Selects the last year option from the time filter.
   */
  async selectLastYearFromTimeFilter(): Promise<void> {
    this.logger.info('Selecting last year from time filter');
    await this.timeFilter.waitFor({ state: 'attached' });
    await this.timeFilter.click();
    await this.timeFilterLastYear.waitFor({ state: 'attached' });
    await this.timeFilterLastYear.click();
  }

}
import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsMetrics
 */
export class ProjectsMetrics extends BaseComponent {
  private container;
  private readonly interactionsGraph: Locator;
  private readonly averageQualityGraph: Locator;
  private readonly qualityPerQuestionGraph: Locator;
  private readonly trendingTopicGraph: Locator;
  private readonly timeFilter: Locator;
  private readonly timeFilterLastYear: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.interactionsGraph = this.container.locator('canvas').first();
    this.averageQualityGraph = this.container.locator('[data-testid="velocity-chart"]');
    this.qualityPerQuestionGraph = this.container.locator('[data-testid="low-quality-chart"]');
    this.trendingTopicGraph = this.container.locator('[data-testid="metric-card"] > div + [data-testid="frecuent-word-chart"]');
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
   * Checks if the average Quality graph is visible.
   * @return {Promise<boolean>}
   */
  async isAverageQualityGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the average Quality graph is visible');
    try {
      await this.averageQualityGraph.waitFor({ state: 'attached' });
      return await this.averageQualityGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking average Quality graph visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the quality Per Question graph is visible.
   * @return {Promise<boolean>}
   */
  async isQualityPerQuestionGaphVisible(): Promise<boolean> {
    this.logger.info('Checking if the topics search graph is visible');
    try {
      await this.qualityPerQuestionGraph.waitFor({ state: 'attached' });
      return await this.qualityPerQuestionGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking quality Per question graph visibility:', error);
      return false;
    }
  }

  /**
   * Checks if the trending topic graph is visible.
   * @return {Promise<boolean>}
   */
  async isTrendingTopicGraphVisible(): Promise<boolean> {
    this.logger.info('Checking if the trending topic graph is visible');
    try {
      await this.trendingTopicGraph.waitFor({ state: 'attached' });
      return await this.trendingTopicGraph.isVisible();
    } catch (error) {
      this.logger.error('Error checking trending topic answers graph visibility:', error);
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
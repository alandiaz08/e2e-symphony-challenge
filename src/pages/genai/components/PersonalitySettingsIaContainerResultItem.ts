import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for personalitySettingsIaContainerResultItem
 */
export class PersonalitySettingsIaContainerResultItem extends BaseComponent {
  private container;
  private readonly settingsTitle: Locator;


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
    this.settingsTitle = this.container.locator('');
  }

  /**
   * Checks if the Settings Title is visible.
   * @return {Promise<boolean>} True if the Settings Title is visible, false otherwise.
   */
  async isSettingsTitleVisible(): Promise<boolean> {
    this.logger.info('Checking if the Settings Title is visible');
    try {
      await this.settingsTitle.waitFor({ state: 'attached' });
      return await this.settingsTitle.isVisible();
    } catch (error) {
      this.logger.error('Error when checking visibility of the Settings Title:', error);
      return false;
    }
  }

  /**
   * Clicks on the Settings Title.
   */
  async clickSettingsTitle(): Promise<void> {
    this.logger.info('Clicking on the Settings Title');
    try {
      await this.settingsTitle.waitFor({ state: 'attached' });
      await this.settingsTitle.click();
    } catch (error) {
      this.logger.error('Error when attempting to click on the Settings Title:', error);
    }
  }

}
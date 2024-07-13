import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for AboutUsDetails
 */
export class AboutUsDetails extends BaseComponent {
  private container;
  private readonly hqText: Locator;
  private readonly foundedText: Locator;
  private readonly sizeText: Locator;
  private readonly clientsText: Locator;

  /**
   * Constructor of the class.
   * @param page
   */
  constructor(page: Page, container) {
    super(page);
    this.container = container;
    this.hqText = container.locator('li:nth-child(1) span');
    this.foundedText = container.locator('li:nth-child(2) span');
    this.sizeText = container.locator('li:nth-child(3) span');
    this.clientsText = container.locator('li:nth-child(6) span');
  }


  /**
   * Compares the provided list of strings with the list of strings obtained from the DOM using the specified selector.
   *
   * @param expectedStrings - The list of expected strings.
   * @returns Promise<boolean> - Returns true if the strings match, otherwise false.
   */
   async hasConsultingLocations(expectedStrings: string[]): Promise<boolean> {
    try {
      this.logger.info('Waiting for the elements to be attached...');
      await this.container.waitForSelector('li:nth-child(5)> strong+div > div > p', { state: 'attached' });

      this.logger.info('Selecting the elements...');
      const elements = await this.container.$$('li:nth-child(5)> strong+div > div > p');

      this.logger.info('Retrieving the text content of the elements...');
      const actualStrings = await Promise.all(elements.map(async (element) => {
        const text = await element.textContent();
        return text ? text.trim() : '';
      }));

      this.logger.info('Comparing the lists of strings...');
      if (actualStrings.length !== expectedStrings.length) {
        this.logger.warn('The lists have different lengths.');
        return false;
      }

      for (let i = 0; i < actualStrings.length; i++) {
        if (actualStrings[i] !== expectedStrings[i]) {
          this.logger.warn(`Strings do not match at position ${i}: expected "${expectedStrings[i]}", found "${actualStrings[i]}"`);
          return false;
        }
      }

      this.logger.info('All strings match.');
      return true;
    } catch (error) {
      this.logger.error('Error comparing strings:', error);
      return false;
    }
  }

  /**
   * Compares the provided list of strings with the list of strings obtained from the DOM using the specified selector.
   *
   * @param expectedStrings - The list of expected strings.
   * @returns Promise<boolean> - Returns true if the strings match, otherwise false.
   */
  async hasEngineeringHubs(expectedStrings: string[]): Promise<boolean> {
    try {
      this.logger.info('Waiting for the elements to be attached...');
      await this.container.waitForSelector('li:nth-child(5)> strong+div > div > p', { state: 'attached' });

      this.logger.info('Selecting the elements...');
      const elements = await this.container.$$('li:nth-child(5)> strong+div > div > p');

      this.logger.info('Retrieving the text content of the elements...');
      const actualStrings = await Promise.all(elements.map(async (element) => {
        const text = await element.textContent();
        return text ? text.trim() : '';
      }));

      this.logger.info('Comparing the lists of strings...');
      if (actualStrings.length !== expectedStrings.length) {
        this.logger.warn('The lists have different lengths.');
        return false;
      }

      for (let i = 0; i < actualStrings.length; i++) {
        if (actualStrings[i] !== expectedStrings[i]) {
          this.logger.warn(`Strings do not match at position ${i}: expected "${expectedStrings[i]}", found "${actualStrings[i]}"`);
          return false;
        }
      }

      this.logger.info('All strings match.');
      return true;
    } catch (error) {
      this.logger.error('Error comparing strings:', error);
      return false;
    }
  }



  /**
   * Retrieves the text content of the HQ text.
   * @return {Promise<string | null>} The text content of the HQ text.
   */
  async getHqText(): Promise < string | null > {
  this.logger.info('Getting the text of the HQ text');
  await this.hqText.waitFor({ state: 'attached' });
  return await this.hqText.textContent();
}

  /**
  * Checks if the HQ text is visible.
  * @return {Promise<boolean>} True if the HQ text is visible, false otherwise.
  */
  async hasHqText(): Promise < boolean > {
  this.logger.info('Checking if the HQ text is visible');
  try {
    await this.hqText.waitFor({ state: 'attached' });
    return await this.hqText.isVisible();
  } catch(error) {
    this.logger.error('Error when checking for HQ text visibility', error);
    return false;
  }
}

  /**
  * Retrieves the text content of the Founded text.
  * @return {Promise<string | null>} The text content of the Founded text.
  */
  async getFoundedText(): Promise < string | null > {
  this.logger.info('Getting the text of the Founded text');
  await this.foundedText.waitFor({ state: 'attached' });
  return await this.foundedText.textContent();
}

  /**
  * Checks if the Founded text is visible.
  * @return {Promise<boolean>} True if the Founded text is visible, false otherwise.
  */
  async hasFoundedText(): Promise < boolean > {
  this.logger.info('Checking if the Founded text is visible');
  try {
    await this.foundedText.waitFor({ state: 'attached' });
    return await this.foundedText.isVisible();
  } catch(error) {
    this.logger.error('Error when checking for Founded text visibility', error);
    return false;
  }
}

  /**
  * Retrieves the text content of the Size text.
  * @return {Promise<string | null>} The text content of the Size text.
  */
  async getSizeText(): Promise < string | null > {
  this.logger.info('Getting the text of the Size text');
  await this.sizeText.waitFor({ state: 'attached' });
  return await this.sizeText.textContent();
}

  /**
  * Checks if the Size text is visible.
  * @return {Promise<boolean>} True if the Size text is visible, false otherwise.
  */
  async hasSizeText(): Promise < boolean > {
  this.logger.info('Checking if the Size text is visible');
  try {
    await this.sizeText.waitFor({ state: 'attached' });
    return await this.sizeText.isVisible();
  } catch(error) {
    this.logger.error('Error when checking for Size text visibility', error);
    return false;
  }
}

  /**
  * Retrieves the text content of the Clients text.
  * @return {Promise<string | null>} The text content of the Clients text.
  */
  async getClientsText(): Promise < string | null > {
  this.logger.info('Getting the text of the Clients text');
  await this.clientsText.waitFor({ state: 'attached' });
  return await this.clientsText.textContent();
}

  /**
  * Checks if the Clients text is visible.
  * @return {Promise<boolean>} True if the Clients text is visible, false otherwise.
  */
  async hasClientsText(): Promise < boolean > {
  this.logger.info('Checking if the Clients text is visible');
  try {
    await this.clientsText.waitFor({ state: 'attached' });
    return await this.clientsText.isVisible();
  } catch(error) {
    this.logger.error('Error when checking for Clients text visibility', error);
    return false;
  }
}

}
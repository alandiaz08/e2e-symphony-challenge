import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for WhatsAppConnectionPage
 */
export class WhatsAppConnectionPage extends BaseComponent {
  private readonly title: Locator;
  private readonly description: Locator;
  private readonly connectTag: Locator;
  private readonly metaForDevelopersButton: Locator;
  private readonly disconnectButton: Locator;
  private readonly phoneNumberTitleConnector: Locator;
  private readonly phoneNumberConnectorField: Locator;
  private readonly copyCallbackUrlCopyButton: Locator;
  private readonly copyCallbackUrlValue: Locator;
  private readonly copyVerficationTokenCopyButton: Locator;
  private readonly copyVerficationTokenValue: Locator;
  private readonly temporalTokenByMetaDeveloperField: Locator;
  private readonly cancelButton: Locator;
  private readonly saveButton: Locator;
  private readonly disconnectWhatsAppPopupContainer: Locator;



  constructor(page: Page) {
    super(page);
    this.title = this.page.locator('[role="dialog"] h2');
    this.description = this.page.locator('div h5');
    this.connectTag = this.page.locator('[data-testid="whatsapp-connected"]');
    this.metaForDevelopersButton = this.page.locator('[data-testid="whatsapp-docs"]');
    this.disconnectButton = this.page.locator('[data-testid="whatsapp-disconnect"]');
    this.phoneNumberTitleConnector = this.page.locator('[id="telephone"]');
    this.phoneNumberConnectorField = this.page.locator('[data-testid="telephone"]');
    this.copyCallbackUrlCopyButton = this.page.locator('[data-testid="ContentCopyIcon"]').nth(0);
    this.copyCallbackUrlValue = this.page.locator('[id="callback_url"]');
    this.copyVerficationTokenCopyButton = this.page.locator('[data-testid="ContentCopyIcon"]').nth(1);
    this.copyVerficationTokenValue = this.page.locator('[id="verification_token"]');
    this.temporalTokenByMetaDeveloperField = this.page.locator('[id="temporary_token"]');
    this.cancelButton = this.page.locator('[data-testid="whatsapp-cancel"]');
    this.saveButton = this.page.locator('[data-testid="whatsapp-save"]');
    this.disconnectWhatsAppPopupContainer = this.page.locator('[role="dialog"]');
  }

  /**
   * Checks if the title is visible.
   * @return {Promise<boolean>}
   */
  async isTitleVisible(): Promise<boolean> {
    this.logger.info('Checking if the title is visible');
    try {
      await this.title.waitFor({ state: 'attached' });
      return await this.title.isVisible();
    } catch (error) {
      this.logger.error('Error when checking title visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the title.
   * @return {Promise<string | null>}
   */
  async getTitleText(): Promise<string | null> {
    this.logger.info('Getting the title text');
    await this.title.waitFor({ state: 'attached' });
    return await this.title.textContent();
  }

  /**
 * Checks if the description is visible.
 * @return {Promise<boolean>}
 */
  async isDescriptionVisible(): Promise<boolean> {
    this.logger.info('Checking if the description is visible');
    try {
      await this.description.waitFor({ state: 'attached' });
      return await this.description.isVisible();
    } catch (error) {
      this.logger.error('Error when checking description visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the description.
   * @return {Promise<string | null>}
   */
  async getDescriptionText(): Promise<string | null> {
    this.logger.info('Getting the description text');
    await this.description.waitFor({ state: 'attached' });
    return await this.description.textContent();
  }

  /**
   * Checks if the connect tag is visible.
   * @return {Promise<boolean>}
   */
  async isConnectTagVisible(): Promise<boolean> {
    this.logger.info('Checking if the connect tag is visible');
    try {
      await this.connectTag.waitFor({ state: 'attached' });
      return await this.connectTag.isVisible();
    } catch (error) {
      this.logger.error('Error when checking connect tag visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the connect tag.
   * @return {Promise<string | null>}
   */
  async getConnectTagText(): Promise<string | null> {
    this.logger.info('Getting the connect tag text');
    await this.connectTag.waitFor({ state: 'attached' });
    return await this.connectTag.textContent();
  }

  /**
   * Clicks the Meta for Developers button.
   */
  async clickMetaForDevelopersButton(): Promise<void> {
    this.logger.info('Clicking the Meta for Developers button');
    await this.metaForDevelopersButton.waitFor({ state: 'attached' });
    await this.metaForDevelopersButton.click();
  }

  /**
   * Checks if the Meta for Developers button is visible.
   * @return {Promise<boolean>}
   */
  async isMetaForDevelopersButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the Meta for Developers button is visible');
    try {
      await this.metaForDevelopersButton.waitFor({ state: 'attached' });
      return await this.metaForDevelopersButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking Meta for Developers button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the disconnect button.
   */
  async clickDisconnectButton(): Promise<void> {
    this.logger.info('Clicking the disconnect button');
    await this.disconnectButton.waitFor({ state: 'attached' });
    await this.disconnectButton.click();
  }

  /**
   * Checks if the disconnect button is visible.
   * @return {Promise<boolean>}
   */
  async isDisconnectButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the disconnect button is visible');
    try {
      await this.disconnectButton.waitFor({ state: 'attached' });
      return await this.disconnectButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking disconnect button visibility', error);
      return false;
    }
  }

  /**
   * Checks if the phone number title connector is visible.
   * @return {Promise<boolean>}
   */
  async isPhoneNumberTitleConnectorVisible(): Promise<boolean> {
    this.logger.info('Checking if the phone number title connector is visible');
    try {
      await this.phoneNumberTitleConnector.waitFor({ state: 'attached' });
      return await this.phoneNumberTitleConnector.isVisible();
    } catch (error) {
      this.logger.error('Error when checking phone number title connector visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the phone number title connector.
   * @return {Promise<string | null>}
   */
  async getPhoneNumberTitleConnectorText(): Promise<string | null> {
    this.logger.info('Getting the phone number title connector text');
    await this.phoneNumberTitleConnector.waitFor({ state: 'attached' });
    return await this.phoneNumberTitleConnector.textContent();
  }

  /**
   * Enters text into the phone number connector field.
   * @param {string} text The text to be entered.
   */
  async enterPhoneNumberConnectorField(text: string): Promise<void> {
    this.logger.info('Entering text into the phone number connector field');
    await this.phoneNumberConnectorField.waitFor({ state: 'attached' });
    await this.phoneNumberConnectorField.fill(text);
  }

  /**
   * Checks if the copy callback URL copy button is visible.
   * @return {Promise<boolean>}
   */
  async isCopyCallbackUrlCopyButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the copy callback URL copy button is visible');
    try {
      await this.copyCallbackUrlCopyButton.waitFor({ state: 'attached' });
      return await this.copyCallbackUrlCopyButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking copy callback URL copy button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the copy callback URL copy button.
   */
  async clickCopyCallbackUrlCopyButton(): Promise<void> {
    this.logger.info('Clicking the copy callback URL copy button');
    await this.copyCallbackUrlCopyButton.waitFor({ state: 'attached' });
    await this.copyCallbackUrlCopyButton.click();
  }

  /**
   * Checks if the copy callback URL value is visible.
   * @return {Promise<boolean>}
   */
  async isCopyCallbackUrlValueVisible(): Promise<boolean> {
    this.logger.info('Checking if the copy callback URL value is visible');
    try {
      await this.copyCallbackUrlValue.waitFor({ state: 'attached' });
      return await this.copyCallbackUrlValue.isVisible();
    } catch (error) {
      this.logger.error('Error when checking copy callback URL value visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the copy callback URL value.
   * @return {Promise<string | null>}
   */
  async getCopyCallbackUrlValueText(): Promise<string | null> {
    this.logger.info('Getting the copy callback URL value text');
    await this.copyCallbackUrlValue.waitFor({ state: 'attached' });
    return await this.copyCallbackUrlValue.textContent();
  }

  /**
   * Checks if the copy verification token copy button is visible.
   * @return {Promise<boolean>}
   */
  async isCopyVerficationTokenCopyButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the copy verification token copy button is visible');
    try {
      await this.copyVerficationTokenCopyButton.waitFor({ state: 'attached' });
      return await this.copyVerficationTokenCopyButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking copy verification token copy button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the copy verification token copy button.
   */
  async clickCopyVerficationTokenCopyButton(): Promise<void> {
    this.logger.info('Clicking the copy verification token copy button');
    await this.copyVerficationTokenCopyButton.waitFor({ state: 'attached' });
    await this.copyVerficationTokenCopyButton.click();
  }

  /**
   * Checks if the copy verification token value is visible.
   * @return {Promise<boolean>}
   */
  async isCopyVerficationTokenValueVisible(): Promise<boolean> {
    this.logger.info('Checking if the copy verification token value is visible');
    try {
      await this.copyVerficationTokenValue.waitFor({ state: 'attached' });
      return await this.copyVerficationTokenValue.isVisible();
    } catch (error) {
      this.logger.error('Error when checking copy verification token value visibility', error);
      return false;
    }
  }

  /**
   * Retrieves the text content of the copy verification token value.
   * @return {Promise<string | null>}
   */
  async getCopyVerficationTokenValueText(): Promise<string | null> {
    this.logger.info('Getting the copy verification token value text');
    await this.copyVerficationTokenValue.waitFor({ state: 'attached' });
    return await this.copyVerficationTokenValue.textContent();
  }

  /**
   * Enters text into the temporal token by Meta developer field.
   * @param {string} text The text to be entered.
   */
  async enterTemporalTokenByMetaDeveloperField(text: string): Promise<void> {
    this.logger.info('Entering text into the temporal token by Meta developer field');
    await this.temporalTokenByMetaDeveloperField.waitFor({ state: 'attached' });
    await this.temporalTokenByMetaDeveloperField.fill(text);
  }

  /**
   * Checks if the cancel button is visible.
   * @return {Promise<boolean>}
   */
  async isCancelButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the cancel button is visible');
    try {
      await this.cancelButton.waitFor({ state: 'attached' });
      return await this.cancelButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking cancel button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the cancel button.
   */
  async clickCancelButton(): Promise<void> {
    this.logger.info('Clicking the cancel button');
    await this.cancelButton.waitFor({ state: 'attached' });
    await this.cancelButton.click();
  }

  /**
   * Checks if the save button is visible.
   * @return {Promise<boolean>}
   */
  async isSaveButtonVisible(): Promise<boolean> {
    this.logger.info('Checking if the save button is visible');
    try {
      await this.saveButton.waitFor({ state: 'attached' });
      return await this.saveButton.isVisible();
    } catch (error) {
      this.logger.error('Error when checking save button visibility', error);
      return false;
    }
  }

  /**
   * Clicks the save button.
   */
  async clickSaveButton(): Promise<void> {
    this.logger.info('Clicking the save button');
    await this.saveButton.waitFor({ state: 'attached' });
    await this.saveButton.click();
  }

  /**
   * Retrieves the disconnect WhatsApp popup container.
   * @returns {Promise<Locator>}
   */
  async getDisconnectWhatsAppPopupContainer(): Promise<Locator> {
    this.logger.info('Retrieving the disconnect WhatsApp popup container');
    await this.disconnectWhatsAppPopupContainer.waitFor({ state: 'attached' });
    return this.disconnectWhatsAppPopupContainer;
  }

}